<template>
  <div class="wrapper">
    <router-link  style="text-decoration: none;" v-for="tab in tabs" :key="tab.title" class="main_btn" :to="tab.link">{{tab.title}}</router-link>
  </div>
</template>

<script>
export default {
  name: "MainMenu",
  props: {
    tabs: Array
  }
}
</script>

<style lang="scss" scoped>
  .main_btn {
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

  .wrapper {
    display: grid;
  }
</style>