<template>
  <div class="hello">
    <img alt="Vue logo" width="200px" height="200px" src="./logo.png" >
    <h1> Welcome to House Plant Doctor </h1>   

     <form v-on:submit.prevent="submitForm">
    <div>
      <label for="username">id: </label>
      <input id="username" type="text" v-model="username">
      </div>
    <div>
      <label for="password">pw: </label>
      <input id="password" type="password" v-model="password">
    </div>
    

    <div v-if="loading">
      <router-link to="/about" tag="button" type="submit">login</router-link>
    </div>
    <div v-else>
      <router-link to="/about" tag="button" type="submit">login</router-link>
    </div>

    <!-- <button type="submit">login</button> -->
    <!-- <router-link to="/about" tag="button" type="submit">login</router-link> -->
  </form>
    
   
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
 
}

</script>

<script>
import axios from 'axios';


export default {
  data: function(){
    return {
      username: '',
      password: '',
      loading: false
    }
  },
  methods: {
    submitForm: function(){
      //console.log(this.username, this.password);
      //event.preventDefault();//form의 이동,새로고침을 막는 코드
      //
      if(this.username == "LEE" && this.password == "1234"){
        loading = true;
        console.log(this.username, this.password,loading);
       //methods에서 data로 접근 하기 위해서는 this
      } 
      var url = 'https://jsonplaceholder.typicode.com/users';
      var data = {
        username: this.username,
        password : this.password
      } 
      axios.post(url, data)//브라우저에서 서버로 데이터를 주고 받기 위한 라이브러리_post는 데이터를 생성하거나 조작하기 위한 
       .then(function(response){
         console.log(response);
       })
       .catch(function(error) {
         console.log(error);
       });
       //window.open("https://google.com", "_blank"); 
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>