<template>
<div id="navbar">
  <nav class="navbar" ref="navbar">
    <li class="navbar-divider">
      <router-link class="navbar__item" :class="{ 'navbar__item--show': showNavbar }" to="/Home">
        <span class="navbar__text" @click="toggleMenu">
          <img class="navbar__icon" src="@/assets/icons/menu-triangle.svg" />
          Home
        </span>
      </router-link>
    </li>
    <li class="navbar-divider">
      <router-link class="navbar__item" :class="{ 'navbar__item--show': showNavbar }" :to="{name: 'Work'}">

        <span class="navbar__text" @click="toggleMenu">
          <img class="navbar__icon" src="@/assets/icons/menu-triangle.svg" />
          Work
        </span>
      </router-link>
    </li>
    <li class="navbar-divider">
      <router-link class="navbar__item" :class="{ 'navbar__item--show': showNavbar }" to="/">

        <span class="navbar__text" @click="toggleMenu">
          <img class="navbar__icon" src="@/assets/icons/menu-triangle.svg" />
          Over
        </span>
      </router-link>
    </li>
    <li class="navbar-divider">
      <router-link class="navbar__item" :class="{ 'navbar__item--show': showNavbar }" to="/">
        <span class="navbar__text" @click="toggleMenu">
          <img class="navbar__icon" src="@/assets/icons/menu-triangle.svg" />
          Diensten
        </span>
      </router-link>
    </li>
    <li class="navbar-divider">
      <router-link class="navbar__item" :class="{ 'navbar__item--show': showNavbar }" to="/">
        <span class="navbar__text" @click="toggleMenu">
          <img class="navbar__icon" src="@/assets/icons/menu-triangle.svg" />
          Partners
        </span>
      </router-link>
    </li>
    <li class="navbar-divider">
      <router-link class="navbar__item" :class="{ 'navbar__item--show': showNavbar }" to="/">

        <span class="navbar__text" @click="toggleMenu">
          <img class="navbar__icon" src="@/assets/icons/menu-triangle.svg" />
          Stories
        </span>
      </router-link>
    </li>
    <li class="navbar-divider">
      <router-link class="navbar__item" :class="{ 'navbar__item--show': showNavbar }" to="/">
        <span class="navbar__text" @click="toggleMenu">
          <img class="navbar__icon" src="@/assets/icons/menu-triangle.svg" />
          Vacatures
        </span>
      </router-link>
    </li>
    <li class="navbar-divider">
      <router-link class="navbar__item" :class="{ 'navbar__item--show': showNavbar }" to="/">
        <span class="navbar__text" @click="toggleMenu">
          <img class="navbar__icon" src="@/assets/icons/menu-triangle.svg" />
          Events
        </span>
      </router-link>
    </li>
    <li class="navbar-divider">
      <router-link class="navbar__item" :class="{ 'navbar__item--show': showNavbar }" to="/">
        <span class="navbar__text" @click="toggleMenu">
          <img class="navbar__icon" src="@/assets/icons/menu-triangle.svg" />
          Contact
        </span>
      </router-link>
    </li>
  </nav>
</div>
</template>

<script>
export default {
  name: 'Navbar',
  props: ['showNavbar'],
  data() {
    return {}
  },
  methods: {
    changeOpenState(func) {
      document.body.classList[func]('no-scroll');
      this.$refs.navbar.classList[func]("navbar--show");
    },
    toggleMenu() {
      this.$emit('toggleMenu');
    }
  },
  watch: {
    showNavbar: function (open) {
      if (open) {
        this.changeOpenState("add");
      } else {
        this.changeOpenState("remove");
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_navbar.scss';
</style>
