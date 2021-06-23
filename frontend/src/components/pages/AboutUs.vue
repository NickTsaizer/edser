<template>
  <div class="wrapper">
    <div class="tab_logo">
      О нас:
    </div>
    <div class="about_info">
      Муниципальное бюджетное образовательное учреждение средняя общеобразовательная школа №3.
    </div>
  </div>
  <div class="info_wrapper wrapper">
    <div class="tab_logo">
      Педагоги:
    </div>
    <div class="persons"><AboutPerson v-for="person in employers" :key="person" :person="person"/></div>
  </div>
</template>

<script>
import AboutPerson from "@/components/pages/page_components/AboutPerson.vue"
export default {
  name: "AboutUs",
  components: {
    AboutPerson
  },

  data: function () {
    return {
      employers: [
        {
          image: "person1",
          name: "Моргенштерн Игорь Васильевич",
          job: "Учитель математики и физики"
        },
        {
          image: "person2",
          name: "Мечиточка Маргарита Романовна",
          job: "Учитель искусства, зам. Директора по вопросам воспитания."
        },
        {
          image: "person3",
          name: "Гурбангулы Таисия Мяликгулыевна",
          job: "Директор школы"
        },
        {
          image: "person4",
          name: "Куриев Эскандер Борисович",
          job: "Учитель физкультуры"
        },
        {
          image: "person5",
          name: "Подвохова Алиса Александровна",
          job: "Учитель руского языка и летиратуры"
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .info_wrapper {
    margin-top: 10px;
  }
  .wrapper {
    text-align: left;
    padding: 15px;
  }
  .persons {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: stretch;
    align-content: flex-start;
  }
</style>