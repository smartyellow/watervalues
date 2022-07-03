<script lang="ts">
  import { calculatePercentage, generateCssGradient } from '../css';
  import type { LeftOrRight, WaterValueId } from '../types';
  import values from '../values';
  import './bar.scss';

  /** The water value type id. */
  export let valueId: WaterValueId | string;

  /** The current water value to display. */
  export let value: number | undefined = undefined;

  /** Position of the label. */
  export let labelPosition: LeftOrRight = 'left';

  /** Show a marker on the bar that indicates the value. */
  export let showMarker = true;
</script>

<div class="watervaluebar">
  {#if value}
    <div class="label {labelPosition}">{value}</div>
  {/if}

  <div
    class="bar"
    style:background={generateCssGradient(values[valueId])}
  >
    {#if showMarker && value}
      <div
        class="marker"
        style:left="{calculatePercentage(values[valueId], value)}%"
      ></div>
    {/if}
  </div>
</div>
