<template>
    <div id="wrapper">
        <nav class="navbar is-dark">
          <div class="navbar-brand">
            <router-link to="/" class="navbar-item"><strong>Hello</strong></router-link>
            <a class="navbar-burger" aria-label="menu" arial-expanded="false" data-target=
            "navbar-menu">
              <span arial-hidden="true"></span>
              <span arial-hidden="true"></span>
              <span arial-hidden="true"></span>
            </a>
          </div>
          <div class="navbar-menu" id="navbar-menu" v-bind:class="{'is-active':showMobileMenu }">
            <div class="navbar-end">
              <router-link to="/" class="navbar-item"><strong>Well</strong></router-link>
              <router-link to="/" class="navbar-item"><strong>Wello</strong></router-link>
              <div class="nav-item">
                <div class="buttons">
                  <router-link to="/" class="button is-light"><strong>Log In</strong></router-link>
                </div>
              </div>
            </div>
          </div>
        </nav>
        </div>

</template>
<script>
export default {
  name: 'navbarC',
  data() {
    return {
      services: [{
        title: 'web',
        link: '#',
      },
      {
        title: 'Design',
        link: '#',
      },
      ],
    };
  },
};
</script>
<style>
</style>
