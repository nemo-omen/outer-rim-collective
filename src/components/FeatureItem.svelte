<script>
  export let item;
</script>

<article class="feature-item" style="background-image: url('img/{item.image}')">
  <header>
    <h1>{item.title}</h1>
    <h3>{item.subtitle}</h3>
  </header>
</article>

<style>
  .feature-item {
    background-position: 50% 15%;
    background-size: cover;
    padding: var(--spacer);
    display: flex;
    flex-direction: column;
    text-shadow: 5px 5px 5px rgba(0, 0, 0, 0.4);
  }
  h1 {
    color: var(--oc-gray-3);
    font-weight: 800;
  }
  h3 {
    color: var(--oc-gray-3);
  }
</style>