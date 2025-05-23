<template>
<HeaderMenu />
<h1>Hello {{name}}, Welcome to Update Restaurant Page</h1>
<form class="add">
  <input type = "text" name = "name" placeholder="Enter Name" v-model="restaurant.name"/>
  <input type = "text" name = "address" placeholder="Enter Address" v-model="restaurant.address"/>
  <input type = "text" name = "contact" placeholder="Enter Contact" v-model="restaurant.contact"/>
  <button type="button" v-on:click="updater">Update restaurant</button>
</form>
</template>
<script>
import HeaderMenu from './Header.vue'
import axios from 'axios'
export default{
  name:'UpdateR',
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
    async updater(){
      const result = await axios.put("http://localhost:3000/restaurants/"+this.$route.params.id, {
        name:this.restaurant.name,
        address:this.restaurant.address,
        contact:this.restaurant.contact,
      });
      if(result.status==200){
        this.$router.push({name:"HomePage"});
      }
    }
  },
  async mounted()
  {
    let user = localStorage.getItem('user-info');
    this.name=JSON.parse(user).name;
    if(!user){
        this.$router.push({name:'SignUp'})
    }

    const result = await axios.get('http://localhost:3000/restaurants/'+this.$route.params.id)
    this.restaurant=result.data
  }
}
</script>

