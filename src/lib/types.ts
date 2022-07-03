export type WaterValueId = 'no2' | 'no3' | 'gh' | 'kh' | 'ph' | 'chlorine';
export type LeftOrRight = 'left' | 'right';

export enum Indication {
  Green = 0,
  Yellow,
  Orange,
  Red,
};

export interface WaterValue {
  /** Localised name of the water value */
  name: {
    nl: string;
    en: string;
  };

  /** Range */
  range: {
    /** Water value */
    value: number;

    /** Indication */
    indication: Indication;
  }[];
};
