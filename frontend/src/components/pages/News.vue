<template>
  <div class="tab_logo wrapper">
    Новости школы:
  </div>
  <Post v-for="post in posts" :key="post" :post="post" :is-view="true">
  </Post>
  <div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10" id="infinity_trigger"> <img src="../../assets/loading.svg" alt=""></div>
</template>

<script>
import axios from "axios";
import infiniteScroll from 'vue3-infinite-scroll'
import Post from "@/components/pages/page_components/Post";

export default {
  name: "News",
  props: {
    deep: Number
  },
  components: {
    Post
  },
  directives: {
    infiniteScroll
  },

  data() {
    return {
      posts: [],
      busy: false,
    }
  },

  methods: {
    loadMore: function () {
      console.log("LOADMORE")
      this.busy = true;
      axios.get(`http://${document.domain}:81/posts`, {headers: {}}).then(response => (
              this.addPosts(response.data)
          )
      );
    },

    addPosts(posts) {
      console.log(posts)
      this.posts = posts
      this.busy = false;
    }
  },
  mounted() {
    this.busy = true;
    axios.get(`http://${document.domain}:81/posts`, {headers: {}}).then(response => (
          this.addPosts(response.data)
        )
    );
  }
}
</script>

<style scoped>

</style>