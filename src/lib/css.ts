import { colors } from './constants';
import type { WaterValue } from './types';

export function valueMinMax(value: WaterValue): {
  min: number;
  max: number;
} {
  value.range.sort((a, b) => a.value - b.value);
  const min = value.range[0].value;
  const max = value.range[value.range.length - 1].value;
  return { min, max };
}

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
