import { darken, getContrast } from 'color2k';
import { Indication } from './types.js';

/** {@link Indication}s with CSS color values */
export const colors: Record<Indication, string> = {
  [Indication.Green]: 'green',
  [Indication.Yellow]: 'yellow',
  [Indication.Orange]: 'orange',
  [Indication.Red]: 'red',
};

export function darkenIfMandatory(color: string): string {
  while (getContrast(color, '#fff') < 4.5) {
    color = darken(color, 0.1);
  }
  return color;
}
