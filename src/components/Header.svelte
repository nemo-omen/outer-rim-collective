<script>
  import { onMount } from "svelte";
  import { navigating, page } from "$app/stores";
  import { goto, prefetch, prefetchRoutes } from "$app/navigation";

  const path = $page.path;

  onMount(() => {
    console.log($page);
  });
</script>

<header>
  <div class="logo">
    <a href="/">
      <img class="orc-logo" src="img/orclogo.svg" alt="Outer Rim Collective logo" width="340" height="160">
    </a>
  </div>
  <nav>
    <a href="/comics" class={path === '/comics' ? 'active' : ''}>Comics</a>
    <a href="/manga" class={path === '/manga' ? 'active' : ''}>Manga</a>
    <a href="/books" class={path === '/books' ? 'active' : ''}>Books</a>
    <a href="/models" class={path === '/models' ? 'active' : ''}>Gundam & Model Kits</a>
    <a href="/collectibles" class={path === '/collectibles' ? 'active' : ''}>Collectibles</a>
    <a href="/blog" class={path === '/blog' ? 'active' : ''}>Blog</a>
    </nav>
</header>

<style>
  header {
    background-color: var(--oc-gray-1);
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding-top: var(--spacer);
  }
  header > * + * {
    margin-top: var(--spacer);
  }
  .orc-logo {
    width: 340px;
    height: auto;
  }
  nav {
    width: 100%;
    justify-self: stretch;
    display: flex;
    justify-content: space-evenly;
    background-color: var(--oc-red-9);
    /* border-top: 1px solid var(--oc-red-7); */
    /* border-bottom: 1px solid var(--oc-red-7); */
    padding: 0.5rem;
  }
  nav a {
    color: var(--oc-yellow-4);
    display: inline-block;
    line-height: 1;
    text-decoration: none;
  }
</style>