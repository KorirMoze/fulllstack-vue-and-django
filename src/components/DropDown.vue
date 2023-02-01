<template>
    <div class="datab" id="contact-me">
      <form v-on:submit.prevent="submitForm">
        <!-- <h1>The Cheapest Safaricom Airtime & Data Bundles in Kenya</h1> -->
        <div class="friend-no" id="user-no" >
            <input v-model="phone" class="phone-no" placeholder="Enter Your Phone Number">
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
                <option class="selections" v-for="dat in Datas"
                :key="dat.id"> Shs.{{dat.price }} for {{dat.bundle}}</option>
            </select>
            <select v-model="selected3" class="sele">
            <option disabled value="" class="selections" >Buy Airtime And Get a bonus</option>
            <option class="selections" v-for="credo in Airtimes"
            :key="credo.id"> Shs.{{credo.price}} for {{credo.cred}}</option>
            </select>
            </label>
        </div>
        <div class="friend-no">
            <input class="phone-no" placeholder="Enter Friends Phone Number"
            v-model="secondSelectedValue" :disabled="selectedValue === 'disable'">
        </div>
        <div class="friend-no">
        <button class="btn1" @click="postData">Submit for processing</button>
      </div>
        </form>
        <div class="subm" v-if="submitted">
          <h3>You have purchased {{selected2}} {{selected3}}.
            Please input Mpesa pin when promted</h3>
        </div>
    </div>
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
      phone: '',
      options: [
        { text: 'Buy Data deals for Self', value: 'disable' },
        { text: 'Buy Data deals for a friend', value: 'enable' },
      ],
      secondOptions: [
        { text: 'Option 1', value: 'option1' },
        { text: 'Option 2', value: 'option2' },
      ],
      submitted: false,
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
    postData() {
      try {
        const data = {
          phone: this.phone,
          selected3: this.selected3,
          selected2: this.selected2,
        };
        console.log(data);
        const response = axios.post('http://170.187.181.141/api/v1/credits/', data);
        console.log(response.data);
        this.submitted = true;
      } catch (error) {
        console.error(error);
      }
    },
    postData1() {
      axios.post('http://170.187.181.141/api/v1/credit_create/', {
        selected3: this.selected3,
        selected2: this.selected2,
      })
        .then((response) => {
          console.log(response);
          this.submitted = true;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    scroll() {
      const element = document.getElementById('contact-me');
      element.scrollIntoView({ behavior: 'smooth' });
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
@media screen and (max-width: 1200px){
  .datab {
    width: 100%;
    display: flex;
    padding: 1rem 1rem;
  }
  .sele {
    text-align: center;
  }
  .datab h1 {
    font-size: 1.6rem;
    text-align: left;
  }
  .phone-no {
    width: 60%!important;
  }
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
  .btn1 {
    -webkit-border-radius: 10;
    -moz-border-radius: 10;
    border-radius: 10px;
    font-family: Courier New;
    color: #ffffff;
    font-size: 20px;
    background: #3498db;
    padding: 10px 20px 10px 20px;
    text-decoration: none;
  }
  .btn1:hover {
    background: transparent;
    text-decoration: none;
    color: black;
  }
</style>
