<template>
  <navBar />
  <section class="section3">
    <router-view/>
  </section>
  <section class="section2">
    <router-section2/>
  </section>
  <section class="footr">
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

</style>
