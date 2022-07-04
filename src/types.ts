export type WaterMeasureId = 'no2' | 'no3' | 'gh' | 'kh' | 'ph' | 'chlorine';
export type LeftOrRight = 'left' | 'right';

/** Color indication, from best to worst */
export enum Indication {
  Green = 0,
  Yellow,
  Orange,
  Red,
};

/** A water value measure */
export interface WaterMeasure {
  /** Localised name of the water measure */
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
