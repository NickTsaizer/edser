<template>
  <div v-if="!isLogined" class="login_form wrapper">
    <div class="tab_logo">Вход:</div>
    <input class="login_field" v-model="username" placeholder="email">
    <input class="login_field" v-model="password" placeholder="password">
    <div @click="login()" class="login_btn">Войти</div>
  </div>
  <PostEditor :access_token="access_token"/>
</template>

<script>
import axios from "axios";
import { sha256 } from 'js-sha256';
import * as Cookies from "js-cookie";
import PostEditor from './page_components/PostEditor.vue'

export default {
  name: "NewPost",
  components: {
    PostEditor
  },
  methods: {
    login() {
      axios.post(`http://${document.domain}:81/auth/login`, {username: this.username, password: sha256(this.password)}).then( (response) => {
            console.log(response)
            if(response){
              Cookies.set("access_token", response.data.access_token)

              axios.defaults.headers.common['Authorization'] = "Bearer "+response.data.access_token;
              this.isLogined = true;
            }
          }
      );
    }
  },
  mounted() {
    let token = Cookies.get("access_token");
    console.log(token);
    if(token !== undefined) {
      this.isLogined = true
      this.access_token = token;
      axios.defaults.headers.common['Authorization'] = "Bearer "+token;
    }
  },
  data: function () {
    return {
      username: '',
      password: '',
      isLogined: false,
      access_token: ""
    }
  },
}
</script>

<style lang="scss" scoped>
.login_form {
  width: max-content;
  margin: auto;
}
.login_btn {
  color: #052608;
  padding: 10px;
  font-size: 20px;
  cursor: pointer;
  &:hover {
    color: white;
    background-color: #5fa066;
  }
  &.router-link-active {
    color: white;
    background-color: #658068;
    &:hover {
      color: white;
      background-color: #5fa066;
    }
  }
}
</style>