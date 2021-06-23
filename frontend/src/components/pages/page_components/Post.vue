<template>
  <div class="post_wrapper wrapper">
    <div class="post_header">
      <div class="post_title">{{post.title}}</div>
      <div class="post_info">
        <div class="post_author">{{post.author}}</div>
        <div class="post_id">{{post.id}}</div>
      </div>

    </div>
    <div class="post_content">
      <quill-editor
          ref="text_editor"
          :options="options"
          @ready="onReady()"
      />
      <div class="read_all">Читать далее...</div>
    </div>
  </div>
</template>

<script >

import { QuillEditor } from "@vueup/vue-quill";

export default {
name: "Post",
  props:{
    post:Object,
    isView: Boolean
  },
  components: {
    QuillEditor
  },
  data() { return {
    options: {
      modules: {
        toolbar: []
      },
      placeholder: 'Тут ничего нет...',
      readOnly: true,
    },
    innerPost: this.post,
  }},
  methods: {
    onReady() {
      this.$refs.text_editor.setContents(JSON.parse(this.post.content));
    }
  },
}
</script>

<style lang="scss" scoped>
.post_wrapper {
  font-family: "Montserrat", sans-serif;
  .post_header {
    display: block;
    text-align: initial;
    margin: 10px;
    .post_title {
      font-size: 30px;
      font-weight: 400;
    }
    .post_info {
      display: flex;
      align-items: center;
      position: relative;
      height: 0;
      top: 30px;
      .post_author{
        font-weight: 300;
        margin-right: 10px;
      }
      .post_id {
        font-size: 10px;
        font-weight: 100;
      }
    }
  }
  .post_content {
    max-height: 600px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    .read_all {

    }
  }
}
</style>