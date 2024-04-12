<template>
  <nav class="navbar navbar-expand-lg bg-body-transparent">
  <div class="container-fluid">
    <img :src="navbarStore.logo" alt="logo de l'application" id="logo">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-around w-50">
        <li class="nav-item" v-for="(page, pageIndex) in navbarStore.pages" :key="pageIndex">
          <router-link :to="page.path">{{ page.label }}</router-link>
        </li>
      </ul>
      <!-- <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form> -->
    </div>
  </div>
</nav>
</template>

<script setup>
import { useNavbarStore } from '@/stores/NavbarStore'
const navbarStore = useNavbarStore();
</script>