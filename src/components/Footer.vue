<template>
<div id="c-footer">
  <footer class="footer c-padding">
    <img src="" alt="" class="footer__img">
    <div class="footer-top">
      <img class="footer-top__logo" src="@/assets/Logo/DEPT-Logo-White.png" alt="">
      <nav class="footer-nav">
        <li>
          <router-link class="footer-nav__item" to="/">Work</router-link>
        </li>
        <li>
          <router-link class="footer-nav__item" to="/">Services</router-link>
        </li>
        <li>
          <router-link class="footer-nav__item" to="/">Stories</router-link>
        </li>
        <li>
          <router-link class="footer-nav__item" to="/">About</router-link>
        </li>
        <li>
          <router-link class="footer-nav__item" to="/">Careers</router-link>
        </li>
        <li>
          <router-link class="footer-nav__item" to="/">Contact</router-link>
        </li>
      </nav>
      <div class="footer-icons">
        <img class="footer-icons__img" src="@/assets/icons/fb.png" alt="facebook">
        <img class="footer-icons__img" src="@/assets/icons/twitter.png" alt="twitter">
        <img class="footer-icons__img" src="@/assets/icons/instagram.png" alt="instagram">
      </div>
    </div>
    <hr class="footer__divider">
    <div class="footer-bottom">
      <div></div>
      <div class="footer-bottom-middle">
        <span class="footer-bottom-middle__text">Chamber of Commerce: 63464101</span>
        <span class="footer-bottom-middle__text">VAT: NL 8552.47.502.B01</span>
        <span class="footer-bottom-middle__text" href="/">Terms and conditions</span>
      </div>
      <div class="footer-copyright-wrapper">
        <span class="footer-bottom__copyright">&copy; 2020 Dept Agency</span>
      </div>
    </div>
  </footer>
  <div @click="scrollTop" class="arrow-container">
    <span class="arrow-container__button">
      <img class="arrow-container__img" src="@/assets/icons/up-arrow.svg" alt="">
      <span class="arrow-container__text">Top</span>
    </span>
  </div>
</div>
</template>

<script>
export default {
  name: 'footer',
  methods: {
    scrollTop() {
      // cancel if already on top
      if (document.scrollingElement.scrollTop === 0) return;

      const cosParameter = document.scrollingElement.scrollTop / 2;
      let scrollCount = 0,
        oldTimestamp = null;

      function step(newTimestamp) {
        if (oldTimestamp !== null) {
          // if duration is 0 scrollCount will be Infinity
          scrollCount += (Math.PI * (newTimestamp - oldTimestamp)) / 900;
          if (scrollCount >= Math.PI)
            return (document.scrollingElement.scrollTop = 0);
          document.scrollingElement.scrollTop =
            cosParameter + cosParameter * Math.cos(scrollCount);
        }
        oldTimestamp = newTimestamp;
        window.requestAnimationFrame(step);
      }
      window.requestAnimationFrame(step);
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/styles/_footer.scss";
</style>
