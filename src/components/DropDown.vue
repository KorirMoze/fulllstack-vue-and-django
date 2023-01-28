<template>
    <div class="datab">
        <h1>The Cheapest Safaricom Airtime & Data Bundles in Kenya</h1>
        <div class="friend-no" id="user-no">
            <input class="phone-no" placeholder="Enter Your Phone Number">
        </div>
        <div class="card1">
            <label for="first-checkbox">
            <!-- Selected: {{ selected }} -->
            <select v-model="selectedValue" class="sele">
            <option disabled value="" class="selections">Buy Amazing Data Bundles Deal</option>
                <option class="selections" v-for="option in options" :value="option.value"
                :key="option">
                    {{ option.text }}
                </option>
            </select>
            <select v-model="selected2"
             class="sele">
                <option disabled value="" class="selections">Available Data Deals options</option>
                <option class="selections" v-for="data in Datas"
                :key="data.id">{{data.bundle}} for Shs.{{data.price }}bob</option>
            </select>
            <select v-model="selected3" class="sele">
            <option disabled value="" class="selections" >Buy Airtime And Get a bonus</option>
            <option class="selections" v-for="credo in Airtimes"
            :key="credo.id">{{credo.cred}}</option>
            </select>
            </label>
        </div>
        <div class="friend-no">
            <input class="phone-no" placeholder="Enter Friends Phone Number"
            v-model="secondSelectedValue" :disabled="selectedValue === 'disable'">
        </div>
    </div>
    <!-- <div class="person">
        <h1>Right here</h1>
        <div class="column is-3" v-for="credo in Airtimes"
        :key="credo.id">
        <h3>{{credo.cred}}</h3>
    </div>

    </div> -->
</template>
<script>
import axios from 'axios';

export default {
  name: 'dropDown',
  props: ['title', 'items'],
  data() {
    return {
      authors: ['moses', 'korir'],
      Datas: [],
      Airtimes: [],
      selected: '',
      selected1: '',
      selected2: '',
      selected3: '',
      selectedValue: '',
      secondSelectedValue: '',
      options: [
        { text: 'Buy data deals for Self', value: 'disable' },
        { text: 'Buy data deals for a friend', value: 'enable' },
      ],
      secondOptions: [
        { text: 'Option 1', value: 'option1' },
        { text: 'Option 2', value: 'option2' },
      ],
    };
  },
  mounted() {
    this.getDatas();
    this.getAirtimes();
  },
  methods: {
    getDatas() {
      axios
        .get('/api/v1/persons/')
        .then((response) => {
          this.Datas = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getAirtimes() {
      axios
        .get('/api/v1/credits/')
        .then((response) => {
          this.Airtimes = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
<style>
.datab {
    padding: 3rem 10rem;
    position: relative;
    width: 100%;
    background-color: #0e375a;
    align-items: center;
    color: bisque;
}
.datab h1 {
    font-size: 2rem;
    text-align: center;
}
.sele{
    width: 100%;
    height: 7vh;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 5px;
    margin: auto;
    text-align: center;
    z-index: 99;
    font-size: 1.3rem;
}
.selections{
    background-color: #8DCBE6;
    height: 5vh;
    text-align: left;
}
.selection:hover {
    background-color: red;
}
.card1 {
    border-radius: 10px;
    padding: 5rem 1rem;
    background-color: white;
    box-shadow: 1px 2px 3px 4px rgba(24, 24, 24, 0.4);
    z-index: 10;
}
.friend-no {
    display:flex;
    justify-content: center;
    padding: 2rem 0;
    background-color: white;
    margin-top: 1.5rem;
    border-radius: 5px;
    box-shadow: 1px 2px 3px 4px rgba(24, 24, 24, 0.4);
}
.phone-no {
    width: 30%;
    height: 4vh;
    box-shadow: 1px 2px 3px 4px rgba(24, 24, 24, 0.4);
}
#user-no {
    margin-bottom: 1.5rem;
}
.app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  .person {
    margin-top: 20px;
  }
</style>
