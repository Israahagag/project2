<template>
  <div id="app">
    <h1>Vue Select</h1>

    <form>
      <input type="text" v-model="name" placeholder="name" />
      <select v-model="devision">
        <option> </option>
        <option
          :value="option"
          v-for="(option, index) in options"
          :key="index"
          >{{ option }}</option
        >
      </select>
      <br />

      <select v-model="grade">
        <option> </option>
        <option :value="id" v-for="(id, index) in id" :key="index">{{
          id
        }}</option>
      </select>
      <br />
    </form>
    <button type="button" @click="addRow">Submit</button>
  </div>
</template>

<script>
//import vSelect from "vue-select";
//import Vuelidate from "vuelidate";

export default {
  name: "Create",
  components: {
    //vSelect,
    // Vuelidate,
  },
  data: function() {
    return {
      options: ["grad1", "grad2", "grad3", "grad4"],
      id: [1, 2, 3, 4, 5],
      selected: "",
      arr: [],
      name: "",
      devision: {},
      grade: {},
      class: {
        name: "",
        devision: {},
        grade: {},
      },
    };
  },
  methods: {
    addRow() {
      this.arr.push(this.selected);

      // what to push unto the rows array?
    },
    watch: {
      name(v) {
        console.log("name", v);
      },
      devision(v) {
        console.log("devision", v);
      },
      grade(v) {
        console.log("grade", v);
      },
    },
  },
};
</script>

<style>
body {
  font-family: "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
  text-rendering: optimizelegibility;
  -moz-osx-font-smoothing: grayscale;
  -moz-text-size-adjust: none;
}
#app {
  background-color: #fff;
}
h1,
.muted {
  color: #2c3e5099;
}

h1 {
  font-size: 26px;
  font-weight: 600;
}

#app {
  max-width: 30em;
  margin: 1em auto;
}
button {
  float: right;
  border-radius: 5px;
  color: #fff;
  width: 20%;
  background: green;
}
select {
  width: 150px;
  height: 30px;
  margin: 10px;
}
</style>
