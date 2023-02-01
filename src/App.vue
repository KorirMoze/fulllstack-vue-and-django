<template>
  <navBar />
  <section class="section">
    <router-view/>
  </section>
  <section class="section2">
    <router-section2/>
  </section>
  <section class="footer">
    <FooterCompo />
  </section>
</template>
<script>
import navBar from './components/navBar.vue';
import FooterCompo from './components/FooterCompo.vue';

export default {
  components: {
    navBar,
    FooterCompo,
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
