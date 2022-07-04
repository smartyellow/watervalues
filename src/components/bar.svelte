<script lang="ts">
  import { calculatePercentage, getIndicationFromValue } from '../calc';
  import { generateCssGradient } from '../css';
  import type { LeftOrRight, WaterMeasure, WaterMeasureId } from '../types';
  import measures from '../measures';
  import './bar.scss';
  import { colors, darkenIfMandatory } from '../color';

  /** The water measure id. */
  export let measureId: WaterMeasureId | string;

  /**
   * Water measure object
   *
   * Can be omitted if measureId is set.
   */
  // @ts-ignore
  export let measure: WaterMeasure = measureId && measures[measureId];

  /** The current water value to display. */
  export let value: number | undefined = undefined;

  /** Position of the label. */
  export let labelPosition: LeftOrRight = 'left';

  /** Show a marker on the bar that indicates the value. */
  export let showMarker = true;

  /** Color the marker according to the indication of the given value. */
  export let colorMarker = false;

  $: if (!measureId && !measure) console.warn(
    'Water value bar: at least one of `measureId` and `measure` must be set.'
  );
  $: labelColor = (
    (value || value === 0) && colorMarker
    ? darkenIfMandatory(colors[getIndicationFromValue(measure, value)])
    : undefined
  );
</script>

<div class="watervaluebar">
  {#if value}
    <div
      class="label {labelPosition}"
      style:color={labelColor}
    >{value}</div>
  {/if}

  <div
    class="bar"
    style:background={generateCssGradient(measures[measureId])}
  >
    {#if showMarker && value}
      <div
        class="marker"
        style:left="{calculatePercentage(measures[measureId], value)}%"
      ></div>
    {/if}
  </div>
</div>
