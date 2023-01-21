<template>
  <div class="home">
    <h1>Buy Data Bundles And Airtime Instantly</h1>
    <h1 class="data">Buy Data bundles at Discounts</h1>
    <h1>Top-Up Airtime at 100% Discount</h1>
    <span>
    <button class="btn">Data Bundles Deal</button>
    <button class="btn">Buy Cheap Airtime</button>
  </span>
  </div>
  <div class="skewed">
    <h2>Bambaswap makes it possible for you to convert your airtime to MPesa instantly
      (In less than 1 minute).We also sell the cheapest airtime and data bundles in Kenya
      at 10-15% discount.</h2>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {
  },
};
</script>
<style>
.home{
  background-color: #277BC0;
  display: flex;
  align-items: center!important;
  justify-content: center;
  height: 500px;
  flex-direction: column;
  width: 100%;
  font-size: 2rem;
  color:white;
}
.home h1{
  font-weight: 800;
}
.data {
  color: #ff7f00;
}
.btn {
  background: #34d9d1;
  background-image: -webkit-linear-gradient(top, #ff7f00, #573f3f);
  background-image: -moz-linear-gradient(top, #ff7f00, #573f3f);
  background-image: -ms-linear-gradient(top, #ff7f00, #573f3f);
  background-image: -o-linear-gradient(top, #ff7f00, #573f3f);
  background-image: linear-gradient(to bottom, #ff7f00, #573f3f);
  -webkit-border-radius: 28;
  -moz-border-radius: 28;
  border-radius: 28px;
  font-family: Arial;
  color: #ffffff;
  font-size: 20px;
  padding: 10px 20px 10px 20px;
  text-decoration: none;
  margin-right: 2rem;
}

.btn:hover {
  background: transparent;
  text-decoration: none;
}
.skewed {
  background-color: #0e375a;
  color: #fff;
  z-index: 2;
}
</style>
