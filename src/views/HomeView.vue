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
  <div class="group Box text-center about skew" id="about">
      <div class="wrapper">
        <h2>Welcome to BambaSwap</h2>
        <p>Bambaswap makes it possible for you to convert your airtime to MPesa instantly
          (In less than 1 minute).
          We also sell the cheapest airtime and data bundles in Kenya at 10-15% discount.</p>
          <p>Bambaswap is Kenya’s  No.1 airtime to Mpesa conversion service. We are the cheapest,
             fastest &amp;
            most reliable airtime to cash conversion service in Kenya.
      Simply Dial <a href="tel:*384*3#">*384*3#</a> or
      </p>
    </div>
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
.skew, .skewUp {
  position: relative;
  z-index: 2;
}
.Box {
  padding: 80px 0;
}
.about, .faqs, .ourproducts {
  background: #0e375a;
  color: #fff;
}
.group {
  clear: both;
}
.text-center {
  text-align: center;
}
.skew:after {
  background: inherit;
  bottom: 0;
  content: '';
  display: block;
  height: 50%;
  left: 0;
  position: absolute;
  right: 0;
  transform: skewY(-1.5deg);
  transform-origin: 100%;
  z-index: -1;
}
.group:after {
  clear: both;
}
</style>
