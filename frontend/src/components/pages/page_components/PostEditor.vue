<template>
  <div class="editor_wrapper wrapper">
    <input class="input_field" v-model="post_data.title" placeholder="Заголовок">
    <quill-editor
        ref="text_editor"
        :options="options"
        :toolbar="'full'"
        @textChange="onEditorChange()"
    />
    <div @click="sendPost()" class="send_btn">Отправить</div>
  </div>
</template>

<script>
import { QuillEditor } from "@vueup/vue-quill";
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import axios from "axios";

export default {
  name: "PostEditor",
  components: {
    QuillEditor
  },
  props: {
    access_token: String
  },
  data: function () {
    return {
      options: {
        placeholder: 'Введите текст...',
        readOnly: false,
        theme: 'snow'
      },
      post_data: {
        title: "",
        content: {}
      }
    }
  },
  methods: {
    onEditorChange: function () {
      this.post_data.content = this.$refs.text_editor.getContents();
    },
    sendPost: function () {
      axios.post(`http://${document.domain}:81/posts`, {access_key: this.access_token, title: this.post_data.title, content: this.post_data.content}).then( (response) => {
            console.log(response)
          }
      );
    }
  }
}
</script>

<style lang="scss" scoped>
.editor_wrapper {
  padding: 10px 0;
}
.input_field {
  border: none;
  font-family: Montserrat,sans-serif;
  font-weight: 500;
  font-size: 30px;
  width: 90%;
}
</style>