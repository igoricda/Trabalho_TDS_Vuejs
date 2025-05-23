<template>
<HeaderMenu />
<h1>Hello {{name}}, Welcome to Add Restaurant Page</h1>
<form class="add">
  <input type = "text" name = "name" placeholder="Enter Name" v-model="restaurant.name"/>
  <input type = "text" name = "address" placeholder="Enter Address" v-model="restaurant.address"/>
  <input type = "text" name = "contact" placeholder="Enter Contact" v-model="restaurant.contact"/>
  <button type="button" v-on:click="addr">Add new restaurant</button>
</form>
</template>
<script>
import HeaderMenu from './Header.vue'
import axios from 'axios'
export default{
  name:'AddR',
  components:{
    HeaderMenu
  },
  data(){
    return{
      restaurant:{
        name:'',
        address:'',
        contact:''
      }
    }
  },
  methods:{
    async addr(){
      const result = await axios.post("http://localhost:3000/restaurants", {
        name:this.restaurant.name,
        address:this.restaurant.address,
        contact:this.restaurant.contact,
      });
      if(result.status==201){
        this.$router.push({name:"HomePage"});
      }
    }
  },
  mounted()
  {
    let user = localStorage.getItem('user-info');
    this.name=JSON.parse(user).name;
    if(!user){
        this.$router.push({name:'SignUp'})
    }
  }
}
</script>

