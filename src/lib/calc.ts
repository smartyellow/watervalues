import type { Indication, WaterMeasure } from './types';

/**
 * Get the minimum and maximum from a {@link WaterMeasure}
 * @param measure Water measure to get the min and max values from
 * @returns Object with `min` and `max`
 *
 * @example
 * ```js
 * measureMinMax(values.gh);
 * //=> { min: 4, max: 15 }
 * ```
 */
export function measureMinMax(measure: WaterMeasure): {
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
  const { min, max } = measureMinMax(measure);
  const spread = max - min;
  let percentage = (value - min) / spread * 100;

  if (percentage > 100) percentage = 100;
  if (percentage < 0) percentage = 0;

  return percentage;
}

/**
 * Get the {@link Indication} from a {@link WaterMeasure} and a value.
 * @param measure Water measure object
 * @param value Value to get indication for
 * @returns Indication
 */
export function getIndicationFromValue(
  measure: WaterMeasure,
  value: number
): Indication {
  const total = measure.range.length;
  let point = -1;
  let indication: Indication | null = null;

  while (!indication) {
    point++;

    if (point === total) {
      indication = measure.range[total - 1].indication;
      break;
    }

    if (value <= measure.range[point].value) {
      indication = measure.range[point].indication;
    }
  }

  return indication;
}
