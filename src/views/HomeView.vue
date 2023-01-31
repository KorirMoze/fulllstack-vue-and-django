<template>
  <div class="home">
    <h1>Buy Data Bundles And Airtime Instantly</h1>
    <h1 class="data">Buy Data bundles at Discounts</h1>
    <h1>Top-Up Airtime at 100% Discount</h1>
    <span>
    <button class="btn" @click="scroll">Data Bundles Deal</button>
    <button class="btn">Buy Cheap Airtime</button>
  </span>
  </div>
  <div class="group Box text-center about skew" id="about">
      <div class="wrapper">
        <h2>Welcome to GlowNet Solutions</h2>
        <p>Glownet Offers the best Data Bundles acroos all the three networks Safaricom, Aitel And
          Telkom,
          you can purchase it  instantly
          (In less than 1 minute).All our Deals Are valid for 30 days
          </p>
          <p>Glownet is Kenya’s  No.1 airtime data Bundles dealer. We are the most affordable,
             fastest &amp;
            most reliable  Kenya.
      Take a look at our offers
      </p>
    </div>
</div>
<div class="why">
  <h2>Why Choose Glownet</h2>
  <div class="columns is-mobile">
    <div class="column">Fast - It takes seconds</div>
    <div class="column">Reliable & Available 24/7</div>
    <div class="column">Convenient & Secure</div>
  </div>
  <div class="columns is-mobile">
    <div class="column">>ou can buy using Fuliza</div>
    <div class="column">Zero Transaction Fees</div>
    <div class="column">Cheapest Airtime & Data in Kenya</div>
  </div>
</div>
<div class="drop">
  <DropDown />
</div>
<div>
  <div id="app">
    <div id="contact-me">
      contact me box
    </div>
  </div>
</div>
<div id="contact-me">qgaHJKFRGDASBJHmkL</div>
</template>

<script>
// @ is an alias to /src
import DropDown from '../components/DropDown.vue';

export default {
  name: 'HomeView',
  components: {
    DropDown,
  },
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
      methods: {
        scrollMeTo(id) {
          const element = document.getElementById(id);
          // Calculate position to scroll to
          const y = element.getBoundingClientRect().top + window.pageYOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        },
      },
    };
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
@media screen  and (max-width: 1200px) {
  .home{
    display: flex;
    justify-content: center;
    text-align: center;
    font-size: 1.7rem;
    height: 400px;
  }
  .home h1{
    font-weight: 700;
    margin-right: 2%;
  }
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
  padding-bottom: 4rem;
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
.wrapper h2 {
  font-size: 2rem;
  font-weight: 700;
}
.why{
  background-color: transparent;
  background-image: url("../assets/Mobile-data.jpg");
  padding-top: 1rem;
  z-index: -10;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  height: 100%;
  padding-bottom: 4rem;
  color: black;
}
.why h2 {
  margin-top: 3rem;
  text-align: center;
  font-size: 2rem;
  font-weight: 500;
  z-index: 4;
}
.columns{
  color: wheat;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 1rem;
  opacity: 5;
  font-weight: 800;
}
.data-bundles{
  background: #0e375a;
  color: white;
}
.data-bundles h1{
  padding-top: 5rem;
  font-size: 2rem;
  text-align: center;
}
#but {
  width: 180%;
}
</style>
