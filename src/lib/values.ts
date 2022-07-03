import { Indication, type WaterValue, type WaterValueId } from './types';

const values: Record<WaterValueId | string, WaterValue> = {
  no3: {
    name: {
      en: 'nitrate',
      nl: 'nitraat',
    },
    range: [
      { value: 0, indication: Indication.Green },
      { value: 50, indication: Indication.Yellow },
      { value: 60, indication: Indication.Red },
      { value: 100, indication: Indication.Red },
    ],
  },

  no2: {
    name: {
      en: 'nitrite',
      nl: 'nitriet',
    },
    range: [
      { value: 0, indication: Indication.Green },
      { value: 0.5, indication: Indication.Yellow },
      { value: 1, indication: Indication.Red },
      { value: 10, indication: Indication.Red },
    ],
  },

  gh: {
    name: {
      en: 'GH',
      nl: 'GH',
    },
    range: [
      { value: 4, indication: Indication.Red },
      { value: 7, indication: Indication.Yellow },
      { value: 15, indication: Indication.Green },
    ],
  },

  kh: {
    name: {
      en: 'KH',
      nl: 'KH',
    },
    range: [
      { value: 3, indication: Indication.Red },
      { value: 7, indication: Indication.Yellow },
      { value: 10, indication: Indication.Green },
    ],
  },

  ph: {
    name: {
      en: 'pH',
      nl: 'pH',
    },
    range: [
      { value: 6.4, indication: Indication.Red },
      { value: 6.9, indication: Indication.Yellow },
      { value: 7.6, indication: Indication.Green },
    ],
  },

  chlorine: {
    name: {
      en: 'chlorine',
      nl: 'chloor',
    },
    range: [
      { value: 0, indication: Indication.Green },
      { value: 0.5, indication: Indication.Red },
      { value: 3, indication: Indication.Red },
    ],
  },
};

export default values;
