<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io">
        <!-- <img src="https://bulma.io/images/bulma-logo.png" width="112"
          height="28" alt="logo"> -->
          <h1>Glownet</h1>
      </a>
      <div class="navbar-brand">
        <a class="navbar-item">
          Personal
        </a>
      </div>
      <div class="navbar-brand">
        <a class="navbar-item">
          Business
        </a>

      </div>
      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false"
      data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">

      <div class="navbar-end">
        <a class="navbar-item">
          Contact Us
        </a>
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">
            Corporate
          </a>

          <div class="navbar-dropdown">
            <a class="navbar-item">
              Airtime Bonus
            </a>
            <a class="navbar-item">
              Data Bundles
            </a>
            <a class="navbar-item">
              Contact Us
            </a>
            <hr class="navbar-divider">
            <a class="navbar-item">
              Report an issue
            </a>
          </div>
        </div>
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-primary">
              <strong>Sign up</strong>
            </a>
            <a class="button is-light">
              Log in
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>

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
.navbar-item{
  font-size: 14px;
  text-align: center;
  padding: 12px 20px;
}
.navbar {
  background-color: #F4F4F4!important;
  padding: 0 6%;
  font-family: 'intervogue-reg';
  height: 41px;
  z-index: 45;
}
.navbar-menu .is_active{
  border-radius: 10px 10px 0px 0px;
  font-size: 14px;
  height: 41px;
}
</style>
