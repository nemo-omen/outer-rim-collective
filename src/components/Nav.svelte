<script>
  import { navigating, page } from "$app/stores";
  import { goto, prefetch, prefetchRoutes } from "$app/navigation";
  // import Icon from './Icon.svelte';

  const path = $page.path;
</script>

<nav class="mobile">
  <a href="/comics" class={path === '/comics' ? 'current' : ''}>
    <div class="nav-item">
      <!-- <Icon name="comic" /> -->
      Comics
    </div>
    </a>
    <a href="/books" class={path === '/books' ? 'current' : ''}>
      <div class="nav-item">
        <!-- <Icon name="book" /> -->
        Books
      </div>
    </a>
    <a href="/collectibles" class={path === '/collectibles' ? 'current' : ''}>
      <div class="nav-item">
        <!-- <Icon name="trophy" /> -->
        Collectibles
      </div>
    </a>
    <a href="/account" class={path === '/account' ? 'current' : ''}>
      <div class="nav-item">
        <!-- <Icon name="person" /> -->
        Account
      </div>
    </a>
</nav>

<style>
  nav { 
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: var(--font-size);
    font-weight: 400;
  }
  nav a {
    color: var(--oc-yellow-4);
    text-decoration: none;
    display: inline-block;
  }
  .nav-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    color: var(--oc-yellow-4);
  }
</style>