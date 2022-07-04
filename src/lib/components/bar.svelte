<script lang="ts">
  import { calculatePercentage, generateCssGradient } from '../css';
  import type { LeftOrRight, WaterMeasure, WaterMeasureId } from '../types';
  import measures from '../measures';
  import './bar.scss';

  /** The water measure id. */
  export let measureId: WaterMeasureId | string;

  /**
   * Water measure object
   *
   * Can be omitted if measureId is set.
   */
  export let measure: WaterMeasure | undefined = measureId ? measures[measureId] : undefined;

  /** The current water value to display. */
  export let value: number | undefined = undefined;

  /** Position of the label. */
  export let labelPosition: LeftOrRight = 'left';

  /** Show a marker on the bar that indicates the value. */
  export let showMarker = true;

  if (!measureId && !measure) console.warn(
    'Water value bar: at least one of `measureId` and `measure` must be set.'
  );
</script>

<div class="watervaluebar">
  {#if value}
    <div class="label {labelPosition}">{value}</div>
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
