<template>
<div id="clients">
  <section class="clients">
    <h3 class="clients__title">Clients</h3>
    <p class="clients__description">We value a great working relationship with our clients above all else. It’s why they often come to our parties. It’s also why we’re able to challenge and inspire them to reach for the stars.</p>
    <div class="clients-img-container">
      <div v-for="(index) in 12" :key="index.id" class="client-image">
        <img :src="clients[index].image" :alt="clients[index].alt" class="clients-img-container__img">
      </div>
    </div>
  </section>
</div>
</template>

<script>
import clientsData from '@/Data/clientsData';

export default {
  name: 'Clients',
  data() {
    return {
      clients: clientsData,
      inactiveclients: [13, 14, 15, 16],
      activeclients: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    }
  },
  methods: {
    randomMax(max) {
      return Math.floor(Math.random() * max);
    },

    chooseNewClient() {
      let randomold = this.randomMax(this.activeclients.length - 1);
      let randomnew = this.randomMax(this.inactiveclients.length - 1);

      let tempold = this.activeclients[randomold];
      let tempnew = this.inactiveclients[randomnew];

      this.activeclients[randomold] = tempnew;
      this.inactiveclients[randomnew] = tempold;

      this.renderedclients[randomold].classList.add("client-image--change");
      setTimeout(() => {
        this.renderedclients[randomold].src = this.clients[tempnew].image;
      }, 750);

      setTimeout(() => {
        this.renderedclients[randomold].classList.remove("client-image--change");
      }, 1300);
    }
  },

  mounted() {
    this.renderedclients = document.querySelectorAll(".clients-img-container__img");
    setInterval(() => {
      this.chooseNewClient();
    }, 5000);
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_clients';
</style>
