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
                <option>Abujubuju</option>
                <option>B</option>
                <option>C</option>
            </select>
            <select v-model="selected2" class="sele">
            <option disabled value="" class="selections">Buy Airtime And Get a bonus</option>
            <option>Sh70=2GB  for 30days</option>
            <option>Sh70=2GB  for 30days</option>
            <option>Sh70=2GB  for 30days</option>
            <option>Sh70=2GB  for 30days</option>
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
    height: 5vh;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 5px;
    margin: auto;
    text-align: center;
}
.selections{
    background-color: #0e465a;
}
.card1 {
    border-radius: 10px;
    padding: 5rem 1rem;
    background-color: white;
}
</style>
