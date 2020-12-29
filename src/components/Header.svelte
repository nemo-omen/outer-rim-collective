<script>
  import { onMount } from "svelte";
  import { navigating, page } from "$app/stores";
  import { goto, prefetch, prefetchRoutes } from "$app/navigation";
  import Search from './Search.svelte';
  import Nav from './Nav.svelte';
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
  <div class="navbar">
    <Nav/>
    <Search/>
  </div>
</header>

<style>
  header {
    background-color: var(--oc-gray-9);
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-top: var(--spacer);
    padding-bottom: var(--spacer);
  }
  .logo {
    display: flex;
    justify-content: center;
  }
  .navbar {
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background-color: var(--oc-red-9);
    padding: 0.5rem var(--spacer);
  }

  @media (min-width: 1024px) {
    .navbar {
      position: relative;
      flex-direction: row;
      justify-content: space-between;
      margin-top: var(--spacer);
    }
    header {
      padding-bottom: 0;
    }
  }
</style>