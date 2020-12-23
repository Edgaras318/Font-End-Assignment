<template>
  <div id="app">
    <Menu />
    <div class="main">
      <router-view/>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/Footer';
import Menu from '@/components/Menu';

export default {
  name: 'App',
  components: {
    Footer,
    Menu
  }
}
</script>

<style lang="scss">
@import "@/assets/styles/_shared.scss";
</style>