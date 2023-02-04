<template>
  <div class="choice">
    <div class="voice">
      <div class="columns is-mobile">
        <div class="column">
          <div class="card" @click="toggleActive" @keyup.enter="toggleActive">
            <footer class="card-footer">
              <a href="#" class="card-footer-item card-radius">Bundles</a>
            </footer>
          </div>
        </div>
        <div class="column">
          <div class="card" @click="toggle1Active" @keyup.enter="toggleActive">
            <footer class="card-footer">
              <a href="#" class="card-footer-item">Airtime</a>
            </footer>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <footer class="card-footer">
              <a href="#" class="card-footer-item">All in One</a>
            </footer>
          </div>
        </div>
      </div>
          <!-- <div v-if="isActive">
            <button class="button is-primary">Activate</button>
          </div> -->
    <div class="togglers">
    <div><h4>Select Data bundle Type</h4></div>
    <label for="first-checkbox">
      <div>
        <div class="checks">
        <div class="columns is-mobile">
          <div class="column is-one-fifth-desktop"><input type="radio" v-model="selectedOption"
            value="self">
            Buy For self</div>
          <div class="column is-one-fifth-desktop"><input type="radio" v-model="selectedOption"
            value="friend">Gift a Friend</div>
        </div>
        <div class="columns is-mobile">
          <div class="column is-one-fifth-desktop"><input type="radio" v-model="selectedOption"
            value="Buy Once">
            Buy Once</div>
          <div class="column is-one-fifth-desktop"><input type="radio" v-model="selectedOption"
            value="autoRenew">Auto Renew</div>
        </div>
      </div>
      </div>
    <form v-on:submit.prevent="submitForm">
      <label for="first-checkbox">
        <div class="sele1">
        <select v-model="selected2"
         class="sele"  v-if="isActive">
            <option  value="" id="sele1" class="selections">
              Available Data Deals options</option>
            <option class="selections" v-for="dat in Datas"
            :key="dat.id"> Shs.{{dat.price }} for {{dat.bundle}}</option>
        </select>
      </div>
        <select v-model="selected3" class="sele"
        v-if="isClicked">
        <option value="" class="selections"  >Buy Airtime And Get a bonus</option>
        <option class="selections" v-for="credo in Airtimes"
        :key="credo.id"> Shs.{{credo.price}} for {{credo.cred}}</option>
        </select>
        </label>
        <div class="chekcbox">
        <div class="friend" id="user-no" >
          <input v-model="phone" class="phone-no" placeholder="Enter Your Phone Number">
      </div>
        <div>
    <!-- <select v-model="selectedOption">
      <option value="">Please select an option</option>
      <option v-for="option in options" :key="option.value" :value="option.value">
        {{ option.text }}
      </option>
    </select> -->
  </div>
      </div>
      <!-- <h1>The Cheapest Safaricom Airtime & Data Bundles in Kenya</h1> -->
      <!-- <div class="card1">
      </div> -->
      <div class="friend-no" v-if="selectedOption === 'friend'">
          <input class="phone-no" placeholder="Enter Friends Phone Number"
          v-model="secondSelectedValue" :disabled="selectedValue === 'disable'">
      </div>
      <label  for="first-checkbox" class="checkbox">
        <input type="checkbox">
        Confirm Purchase
      </label>
      <div class="friend-no">
      <button class="btn1" @click="postData">Purchase</button>
    </div>
      </form>
    <!-- <section>
      <h3>binding value</h3>
      <br />
      <span>value: {{gender}}</span>
    </section> -->
  </label>
  </div>
</div>
</div>
        <div class="subm" v-if="submitted">
          <h3>You have purchased {{selected2}} {{selected3}}.
            Please input Mpesa pin when promted</h3>
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
      isActive: false,
      isClicked: false,
      selectedOption: null,
      selectedValidity: null,
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
        const response = axios.post('http://127.0.0.1:8000/api/v1/credits/', data);
        console.log(response.data);
        this.submitted = true;
      } catch (error) {
        console.error(error);
      }
    },
    postData1() {
      axios.post('http://127.0.0.1:8000/credit_create/', {
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
    toggleActive() {
      this.isActive = !this.isActive;
    },
    toggle1Active() {
      this.isClicked = !this.isClicked;
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
    width: 50%;
    height: 7vh;
    display: flex;
    justify-content: left;
    align-items: left;
    text-align: center;
    z-index: 2;
    font-size: 1.3rem;
    border: 1px solid #d6d6d6;
    padding: 0 15px;
    border-radius: 10px;
}
.sele1 {
  margin-bottom: 1rem!important;
  margin-top: 1rem;
}
.selections{
    background-color: #8DCBE6;
    height: 5vh;
    text-align: left;
    border: 1px solid #d6d6d6!important;
    padding: 0 15px;
    border-radius: 10px;
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
    margin: 1rem 0;
  }
  .btn1:hover {
    background: transparent;
    text-decoration: none;
    color: black;
  }
  .checkbox {
    margin-top: 1rem;
    margin-bottom: 1rem;
    padding: 20px 0 20px 25px;
    border: 1px solid #eee;
    width: 50%;
    border-radius: 10px;
  }
  .checkbox label::before {
    content: "";
    display: inline-block;
    position: absolute;
    width: 32px;
    height: 32px;
    left: 0;
    margin-left: -20px;
    border: 1px solid #cccccc;
    border-radius: 10px;
    background-color: #fff;
    -webkit-transition: border 0.15s ease-in-out, color 0.15s ease-in-out;
    -o-transition: border 0.15s ease-in-out, color 0.15s ease-in-out;
    transition: border 0.15s ease-in-out, color 0.15s ease-in-out;
}
.friend {
  width: 100%;
  border-radius: 10px;
}
.phone-no{
  padding: 20px 0 20px 35px !important;
  border: 1px solid #cccccc;
  border-radius: 10px;
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
    width: 100%!important;
    margin-bottom: 1.5rem;
  }
  .card {
    font-size: 0.9;
    width: 100%;
  }
  .card-footer-item{
    display: block;
    text-align: center;
  }
  .column{
    padding: 0;
    margin-right: 1rem;
    padding-bottom: 1rem;
  }
  .togglers h4 {
    padding-bottom: 1rem;
  }
  .togglers{
    width: 100%;
  }
  .checkbox {
    padding: 10px 0 10px 15px !important;
    width: 100%;
  }
  .btn1 {
    width: 100%;
  }
  .sele {
    width: 100%;
    margin-bottom: 1rem;
  }
}
.sele {
  width: 100%;
  margin-bottom: 1rem;
}
</style>
