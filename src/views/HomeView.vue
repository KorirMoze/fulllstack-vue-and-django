<template>
  <div class="home">
    <div class="homee">
    <h1>Buy Bundles and Recharge Online</h1>
    <h2 class="data">Buy Data bundles at Discounts</h2>
    <h2>Purchase bundles and airtime via credit/cheque card,M-pesa And Airtell Money.</h2>
    <span>
    <!-- <button class="btn" @click="scroll">Scroll Down for Offers</button> -->
  </span>
</div>
  </div>
  <div class="choice">
    <div class="voice">
  <div class="card">
    <footer class="card-footer">
      <a href="#" class="card-footer-item">Data-Bundles</a>
      <a href="#" class="card-footer-item">Airtime</a>
      <a href="#" class="card-footer-item">All in One</a>
    </footer>
  </div>
  <div class="togglers">
    <div><h4>Select Data bundle Type</h4></div>
    <label for="first-checkbox">
      <div>
        <div class="columns is-mobile">
          <div class="column is-one-fifth-desktop"><input type="radio" v-model="selectedOption"
            value="autoRenew">
            Buy Once</div>
          <div class="column is-one-fifth-desktop"><input type="radio" v-model="selectedOption"
            value="autoRenew">
            Auto Renew</div>
        </div>

        <div v-if="selectedOption === 'autoRenew'">
          <h4>Validity</h4>
          <div class="columns is-mobile">
            <div class="column is-one-fifth-desktop"><input type="radio" v-model="selectedValidity"
              v-bind:value="buyForSelf">Buy for Self </div>
              <div class="column is-one-fifth-desktop"><input type="radio"
                v-model="selectedValidity"
                v-bind:value="giftAFriend">Gift a Friend</div>
          </div>
        </div>
      </div>
    <section>
      <span>value: {{color}}</span>
    </section>

    <section>
      <h3>binding value</h3>
      <br />
      <span>value: {{gender}}</span>
    </section>
  </label>
  </div>
</div>
</div>
  <!-- <div class="group Box text-center about skew" id="about">
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
</div> -->
<!-- <div class="why">
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
</div> -->
<div class="drop">
  <DropDown />
</div>
<div>
  <div id="app">
  </div>
</div>
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
      color: '',
      gender: '',
      a: 'man',
      b: 'woman',
      selectedOption: null,
      selectedValidity: null,
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
  width: 100%;
  color:white;
}
.homee{
  width: 80%;
  text-align: left;
  margin: auto;

}
@media screen  and (max-width: 1200px) {
  .home{
    display: block;
    justify-content: center;
    text-align: center;
    font-size: 1.7rem;
    padding: 40px 6% 80px;
  }
  .home h1{
    font-weight: 500;
  }
}
.homee h1{
  font-weight: 500;
  font-family: 'intervogue-bold';
  margin-bottom: 6px;
  font-size: 36px;
  line-height: 1.1;
}
.home h2 {
    font-family: 'intervogue-reg';
    background-color: transparent;
    color: #fff;
    font-size: 18px;
    padding: 2px 10px 2px 0;
    width: auto;
    margin: 0;
    margin-top: 6px;
    text-align: left;
    text-transform: none;
    line-height: 24px;
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
  z-index: 1;
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
.choice {
  position: relative;
  background-color: #fff;
  width: 94%;
  margin-left: 3%;
  margin-right: 3%;
  margin-top: -40px;
  padding: 40px;
  z-index: 2;
}
.section3{
  background-color: #ececec;
}
.togglers{
  margin: auto;
  align-items: center;
  width: 80%;
}
</style>
