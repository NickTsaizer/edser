<template>
  <div class="person_wrapper">
    <img class="person_image" :src="getImgUrl(person.image)" alt="">
    <div class="person_name">
      {{person.name}}
    </div>
    <div class="person_job">{{person.job}}</div>
  </div>
</template>

<script>
export default {
  name: "AboutPerson",
  props: {
    person:Object
  },
  methods: {
    getImgUrl(pet) {
      let images = require.context('@/assets/', false, /\.jpg$/)
      return images('./' + pet + ".jpg")
    }
  },
}
</script>

<style lang="scss" scoped>
.person_wrapper {
  width: 300px;
  font-family: "Montserrat", sans-serif;
  margin-top: 20px;
  .person_image {
    width: 100%;
  }
  .person_name {
    font-size: 20px;
    font-weight: 600;
  }
}
</style>