<script>
  import { onMount } from "svelte";
  import { navigating, page } from "$app/stores";
  import { goto, prefetch, prefetchRoutes } from "$app/navigation";
  import Search from './Search.svelte';
  import Logo from './Logo.svelte';

  const path = $page.path;

  onMount(() => {
    console.log($page);
  });
</script>

<header>
  <div class="logo">
    <a href="/">
      <Logo/>
    </a>
  </div>
  <nav>
    <a href="/comics" class={path === '/comics' ? 'active' : ''}>Comics</a>
    <a href="/manga" class={path === '/manga' ? 'active' : ''}>Manga</a>
    <a href="/books" class={path === '/books' ? 'active' : ''}>Books</a>
    <a href="/models" class={path === '/models' ? 'active' : ''}>Gundam & Model Kits</a>
    <a href="/collectibles" class={path === '/collectibles' ? 'active' : ''}>Collectibles</a>
    <a href="/blog" class={path === '/blog' ? 'active' : ''}>Blog</a>
    <Search/>
    </nav>
</header>

<style>
  header {
    background-color: var(--oc-gray-9);
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
    width: 200px;
    height: auto;
    filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.4));
  }
  nav {
    width: 100%;
    justify-self: stretch;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: var(--oc-red-9);
    /* border-top: 1px solid var(--oc-red-7); */
    /* border-bottom: 1px solid var(--oc-red-7); */
    /* padding: 0.5rem; */
  }
  nav a {
    color: var(--oc-yellow-4);
    display: inline-block;
    line-height: 1;
    text-decoration: none;
    padding: 0;
    font-size: 1rem;
    font-weight: 400;
  }
</style>