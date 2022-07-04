import { calculatePercentage } from './calc';
import { colors } from './color';
import type { WaterMeasure } from './types.js';

/**
 * Build the CSS gradient code for the given water type
 * @param measure {@link WaterMeasure}
 * @returns CSS gradient code
 *
 * @example
 * ```js
 * generateCssGradient(values.no2);
 * //=> linear-gradient(90deg, green 0%, yellow 5%, red 10%, red 100%)
 * ```
 */
export function generateCssGradient(measure: WaterMeasure): string {
  measure.range.sort((a, b) => a.value - b.value);
  let css = 'linear-gradient(90deg,';

  for (const point of measure.range) {
    const percentage = calculatePercentage(measure, point.value);
    const color = colors[point.indication];
    css += `${color} ${percentage}%,`;
  }

  if (css.endsWith(',')) {
    css = css.slice(0, -1);
  }

  css += ')';
  return css;
}
