<!--<template>

<form id="app" @submit="checkForm" action="/something" method="post">
  
  <p v-if="errors.length">
    <b>Please correct the following error(s):</b>
    <ul>
     <li v-for="error in errors">{{ error }}</li>
    </ul>
  </p>
  
  <p>
    <label for="name">Name</label>
    <input type="text" name="name" id="name" v-model="name">
  </p>

  <p>
    <label for="age">Age</label>
    <input type="number" name="age" id="age" v-model="age" min="0">
  </p>

</form>
</template>


<script>
export default ({
    name: "list",
    components:{},
    data: {
    errors:[],
    name:null,
    age:null,
    movie:null
  },
  methods:{
    checkForm:function(e) {
      if(this.name && this.age) return true;
      this.errors = [];
      if(!this.name) this.errors.push("Name required.");
      if(!this.age) this.errors.push("Age required.");
      e.preventDefault();
    }
  }

})
</script> -->