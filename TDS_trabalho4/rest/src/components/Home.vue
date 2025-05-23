<template>
<HeaderMenu />
<h1>Hello {{name}}, Welcome on Home Page</h1>
<table class="center-table" border="1">
  <tr>
    <td>Name</td>
    <td>Contact</td>
    <td>Address</td>
    <td>Actions</td>
  </tr>
  <tr v-for="item in restaurant" :key="item.id">
    <td>{{item.name}}</td>
    <td>{{item.contact}}</td>
    <td>{{item.address}}</td>
    <td>
  <router-link :to="'/update/'+item.id" style="margin-right: 10px;">Update</router-link>
  <button v-on:click="deleter(item.id)">Delete</button>
</td>

  </tr>
</table>
</template>
<script>
import HeaderMenu from './Header.vue'
import axios from 'axios'
export default{
  name:'HomePage',
  data(){
    return{
      name:'',
      restaurant:[],
    }
  },
  components:{
    HeaderMenu
  },
  methods:{
    async deleter(id){
        let result = await axios.delete("http://localhost:3000/restaurants/"+id);
        if(result.status == 200){
          this.loadData();
        }
    },
    async loadData(){

      let user = localStorage.getItem('user-info');
      this.name=JSON.parse(user).name;
      if(!user){
          this.$router.push({name:'SignUp'})
      }
      let result = await axios.get("http://localhost:3000/restaurants");
      this.restaurant=result.data
    }
  },
  async mounted()
  {
    this.loadData();
  }
}
</script>
<style>
td{
  width: 160px;
  height:40px
}
.center-table {
  margin: auto; /* Centraliza horizontalmente */
  border-collapse: collapse; /* Remove espaçamentos extras */
  width: 80%; /* Define uma largura para evitar que fique muito grande */
  text-align: center; /* Centraliza o texto dentro das células */
}

</style>
