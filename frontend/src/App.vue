<template>
  <div class="main_layout">
    <div class="wrapper left_menu">
      <div class="tab_logo">МБОУ СОШ №3</div>
      <MainMenu :tabs="main_tabs"/>
    </div>
    <div class="main_window">
      <router-view/>
    </div>
  </div>

  <div class="main_particles">
    <div class="_particle"></div>
    <div class="_particle"></div>
    <div class="_particle"></div>
    <div class="_particle"></div>
    <div class="_particle"></div>
    <div class="_particle"></div>
    <div class="_particle"></div>
    <div class="_particle"></div>
    <div class="_particle"></div>
    <div class="_particle"></div>
    <div class="_particle"></div>
    <div class="_particle"></div>
    <div class="_particle"></div>
    <div class="_particle"></div>
    <div class="_particle"></div>
    <div class="_particle"></div>
    <div class="_particle"></div>
    <div class="_particle"></div>
    <div class="_particle"></div>
    <div class="_particle"></div>
    <div class="_particle"></div>
    <div class="_particle"></div>
    <div class="_particle"></div>
    <div class="_particle"></div>
    <div class="_particle"></div>
    <div class="_particle"></div>
  </div>
</template>

<script>
import MainMenu from './components/layout/MainMenu'

export default {
  components: {
    MainMenu,
  },
  data() {
    return {
      main_tabs: [
        {
          title: "Главная",
          link: "/"
        },
        {
          title: "О нас",
          link: "/about"
        },
      ]
    }
  },
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #152212;
}

body {
  background: #eaefec;
  margin: 0;
}

.tab_logo {
  font-size: 30px;
  padding: 0 20px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  color: #488e38;
}


@for $i from 1 through 30 {
  @keyframes particle-animation-#{$i} {
      100% {
        transform: translate3d((random(90) * 1vw), (random(90) * 1vh), (random(100) * 1px));
      }
    }



    #app > div.main_particles > div:nth-child(#{$i}){
    animation: particle-animation-#{$i} 60s infinite;
    $size: random(5) + 5 + px;
    opacity: random(100)/100;
    height: $size;
    width: $size;
    animation-delay: -$i * .2s;
    transform: translate3d((random(90) * 1vw), (random(90) * 1vh), (random(100) * 1px));
    background: hsl(random(360), 70%, 50%);
  }
}
.main_particles {
  position: absolute;
  width: 99vw;
  height: 99vh;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: -1;
  overflow: hidden;
}

.main_layout {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: nowrap;
  align-content: center;
  align-items: flex-start;
  margin-top: 20px;
}

.main_window {
  max-width: 700px;
  flex-grow: 1;
  margin-left: 10px;
}
.left_menu {
  padding: 10px 0;
  position: sticky;
}
.wrapper {
  background: #ffffff;
  opacity: 0.9;
  border-radius: 5px;
  z-index: 99999999;
}
</style>
