export type WaterValueId = 'no2' | 'no3' | 'gh' | 'kh' | 'ph' | 'chlorine';
export type LeftOrRight = 'left' | 'right';

/** Color indication, from best to worst */
export enum Indication {
  Green = 0,
  Yellow,
  Orange,
  Red,
};

/** A water value measure */
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
