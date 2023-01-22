<template>
    <!-- <div class="data-bundles">
        <h1>The Cheapest Safaricom Airtime & Data Bundles in Kenya</h1>
        <div class="wrapper-group">
          <div class="dropdown">
            <div class="dropdown-trigger">
              <button id ='but' class="button" aria-haspopup="true" aria-controls="dropdown-menu3" >
                <span>Buy Monthly Data Deals</span>
                <span class="icon is-small">
                  <i class="fas fa-angle-down" aria-hidden="true"></i>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    <div class="dropdown-menu" id="dropdown-menu3" role="menu">
        <div class="dropdown-content">
          <a href="#" class="dropdown-item">
            Overview
          </a>
          <a href="#" class="dropdown-item">
            Modifiers
          </a>
          <a href="#" class="dropdown-item">
            Grid
          </a>
          <a href="#" class="dropdown-item">
            Form
          </a>
          <a href="#" class="dropdown-item">
            Elements
          </a>
          <div>
            dsfagvhzbjnmfgvdsbh
          </div>
          <a href="#" class="dropdown-item">
            Layout
          </a>
          <hr class="dropdown-divider">
          <a href="#" class="dropdown-item">
            More
          </a>
        </div>
      </div> -->

    <div>
        <select v-model="author">
            <option v-for="author in authors">{{author}}</option>
        </select>
    </div>
</template>
<script>
export default {
  name: 'dropDown',
  props: ['title', 'items'],

  data() {
    return {
      authors: ['moses', 'korir'],
    };
  },
};
</script>
<style></style>
