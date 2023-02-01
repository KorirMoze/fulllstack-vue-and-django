<template>
  <navBar />
  <section class="section">
    <router-view/>
  </section>
  <section class="section2">
    <router-section2/>
  </section>
  <footer class="footer">
    <p class="has-text-centered">Copyright (@) 2022</p>
  </footer>
</template>
<script>
import navBar from './components/navBar.vue';

export default {
  components: {
    navBar,
  },
  data() {
    return {
      showMobileMenu: false,
    };
  },
};
</script>
<style lang="scss">
@import '../node_modules/bulma';
.section {
  padding: 0 0;
}
</style>
