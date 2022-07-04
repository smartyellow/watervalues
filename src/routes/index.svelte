<script lang="ts">
  import Bar from '$lib/components/bar.svelte';
  import { valueMinMax } from '$lib/css';
  import measures from '$lib/measures';

  function capitalise(string: string): string {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  function randomFloat(min: number, max: number) {
    return Number(
      (Math.random() * (max - min) + min).toFixed(1)
    );
  }
</script>

<h1>Aquarium water values</h1>

{#each Object.entries(measures) as [ id, measure ]}
  {@const mm = valueMinMax(measure)}
  <p>{capitalise(measure.name.en)}</p>
  <p>
    <Bar
      measureId={id}
      value={randomFloat(mm.min, mm.max)}
    />
  </p>
{/each}
