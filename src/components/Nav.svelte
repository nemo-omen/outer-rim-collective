<script>
  import { navigating, page } from "$app/stores";
  import { goto, prefetch, prefetchRoutes } from "$app/navigation";
  import Icon from './Icon.svelte';

  const path = $page.path;
</script>

<nav>
  <a href="/comics" class={path === '/comics' ? 'current' : ''}>
    <div class="nav-item">
      <div class="icon">
        <Icon name="comic" />
      </div>
      Comics
    </div>
    </a>
  <a href="/manga" class="desktop {path === '/manga' ? 'current' : ''}">
    <div class="nav-item">
      Manga
    </div>
    </a>
    <a href="/books" class={path === '/books' ? 'current' : ''}>
      <div class="nav-item">
        <div class="icon">
          <Icon name="book" />
        </div>
        Books
      </div>
    </a>
    <a href="/models" class="desktop {path === '/models' ? 'current' : ''}">
      <div class="nav-item">
        Models
      </div>
    </a>
    <a href="/collectibles" class={path === '/collectibles' ? 'current' : ''}>
      <div class="nav-item">
        <div class="icon">
          <Icon name="trophy" />
        </div>
        Collectibles
      </div>
    </a>
    <a href="/account" class={path === '/account' ? 'current' : ''}>
      <div class="nav-item">
        <div class="icon">
          <Icon name="person" />
        </div>
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

  .desktop {
    display: none;
  }

  @media (min-width: 1024px) {
    .icon {
      display: none;
    }
    nav {
      flex-grow: 1;
      justify-content: space-evenly;
    }

    .desktop {
      display: inline-block;
    }
  } 
</style>