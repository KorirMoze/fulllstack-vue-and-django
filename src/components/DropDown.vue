<template>
    <div class="datab">
        <div class="card1">
            <label for="first-checkbox">
            <!-- Selected: {{ selected }} -->
            <select v-model="selected" class="sele">
            <option disabled value="" class="selections">Buy Amazing Data Bundles Deal</option>
            <option></option>
            <option>B</option>
            <option>C</option>
            </select>
            <select v-model="selected1" class="sele">
                <option disabled value="" class="selections">Gift Data Deals to a friend</option>
                <option>Sh70=2GB  for 30days</option>
                <option>Sh70=2GB  for 30days</option>
                <option>Sh70=2GB  for 30days</option>
                <option>Sh70=2GB  for 30days</option>
            </select>
            <select v-model="selected2" class="sele">
            <option disabled value="" class="selections">Buy Airtime And Get a bonus</option>
            <option class="selections">Sh70=2GB  for 30days \n
                <p>fgdsahbxnkmsjdh</p></option>
            <option class="selections">Sh70=2GB  for 30days</option>
            <option class="selections">Sh70=2GB  for 30days</option>
            <option class="selections">Sh70=2GB  for 30days</option>
            </select>
            </label>
        </div>
    </div>
</template>
<script>
export default {
  name: 'dropDown',
  props: ['title', 'items'],

  data() {
    return {
      authors: ['moses', 'korir'],
      selected: '',
      selected1: '',
      selected2: '',
    };
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
    font-size: 1.5rem;
}
.selections{
    background-color: #0e465a;
    height: 5vh;
}
.card1 {
    border-radius: 10px;
    padding: 5rem 1rem;
    background-color: white;
    box-shadow: 1px 2px 3px 4px rgba(24, 24, 24, 0.4);
    z-index: 10;
}
</style>
