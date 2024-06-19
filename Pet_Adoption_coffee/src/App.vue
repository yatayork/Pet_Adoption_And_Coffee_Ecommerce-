<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <Router-link>
      </Router-link>
    </div>
  </header>

  <RouterView />
</template>

<style lang="scss">
header {
  line-height: 1.5;
  max-height: 100vh;
}
</style>
