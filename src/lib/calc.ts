import type { WaterMeasure } from './types';

/**
 * Get the minimum and maximum from a {@link WaterMeasure}
 * @param measure Water measure to get the min and max values from
 * @returns Object with `min` and `max`
 *
 * @example
 * ```js
 * valueMinMax(values.gh);
 * //=> { min: 4, max: 15 }
 * ```
 */
export function valueMinMax(measure: WaterMeasure): {
  min: number;
  max: number;
} {
  measure.range.sort((a, b) => a.value - b.value);
  const min = measure.range[0].value;
  const max = measure.range[measure.range.length - 1].value;
  return { min, max };
}

/**
 * Convert a value to percentage
 * @param measure {@link WaterMeasure}
 * @param value Water value (e.g. `7.4`)
 * @returns `val` in percentage format from 0 through 100
 *
 * @example
 * ```js
 * calculatePercentage(values.ph, 6.9);
 * //=> 41.66666666666669
 * ```
 */
export function calculatePercentage(
  measure: WaterMeasure,
  value: number
): number {
  const { min, max } = valueMinMax(measure);
  const spread = max - min;
  let percentage = (value - min) / spread * 100;

  if (percentage > 100) percentage = 100;
  if (percentage < 0) percentage = 0;

  return percentage;
}
