<script lang="ts">
  import { Container, ContainerWrapper } from 'syll';
  import 'syll/styles/app.scss';
</script>

<ContainerWrapper>
  <Container size="md">
    <main>
      <slot />
    </main>
  </Container>
</ContainerWrapper>

<style lang="scss">
  main {
    margin-top: 3rem;
  }

  :global(h1) {
    border: none;
    margin: 0;
    margin-bottom: 3rem;
  }
</style>
