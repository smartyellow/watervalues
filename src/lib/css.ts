import { colors } from './constants';
import type { WaterValue } from './types';

/**
 * Get the minimum and maximum from a {@link WaterValue}
 * @param value Water value to get the min and max values from
 * @returns Object with `min` and `max`
 *
 * @example
 * ```js
 * valueMinMax(values.gh);
 * //=> { min: 4, max: 15 }
 * ```
 */
export function valueMinMax(value: WaterValue): {
  min: number;
  max: number;
} {
  value.range.sort((a, b) => a.value - b.value);
  const min = value.range[0].value;
  const max = value.range[value.range.length - 1].value;
  return { min, max };
}

/**
 * Convert a value to percentage
 * @param waterValue {@link WaterValue}
 * @param val Water value (e.g. `7.4`)
 * @returns `val` in percentage format from 0 through 100
 *
 * @example
 * ```js
 * calculatePercentage(values.ph, 6.9);
 * //=> 41.66666666666669
 * ```
 */
export function calculatePercentage(
  waterValue: WaterValue,
  val: number
): number {
  const { min, max } = valueMinMax(waterValue);
  const spread = max - min;
  let percentage = (val - min) / spread * 100;

  if (percentage > 100) percentage = 100;
  if (percentage < 0) percentage = 0;

  return percentage;
}

/**
 * Build the CSS gradient code for the given water type
 * @param value {@link WaterValue}
 * @returns CSS gradient code
 *
 * @example
 * ```js
 * generateCssGradient(values.no2);
 * //=> linear-gradient(90deg, green 0%, yellow 5%, red 10%, red 100%)
 * ```
 */
export function generateCssGradient(value: WaterValue): string {
  value.range.sort((a, b) => a.value - b.value);
  let css = 'linear-gradient(90deg,';

  for (const point of value.range) {
    const percentage = calculatePercentage(value, point.value);
    const color = colors[point.indication];
    css += `${color} ${percentage}%,`;
  }

  if (css.endsWith(',')) {
    css = css.slice(0, -1);
  }

  css += ')';
  return css;
}
