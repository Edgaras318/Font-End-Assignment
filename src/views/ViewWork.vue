<template>
<div id="view-work">
  <div v-if="!this.work">
    <h1>DATA LOADING...</h1>
  </div>
  <article v-else class="view-work">
    <img :src="work.image" :alt="work.alt" class="view-work__img">
    <span class="view-work__label">{{ work.name }}</span>
    <h3 class="view-work__title">{{ work.title }}</h3>
    <button class="view-work__button">View case</button>
  </article>
</div>
</template>

<script>
import worksData from '@/Data/worksData';

export default {
  data() {
    return {
      work: null,
      works: worksData,
      workId: this.$route.params.work_id
    }
  },
  methods: {
    getWorkById() {
      this.works.map((work) => {
        if (work.id == this.workId) {
          this.work = work;
        }
      });
    }
  },
  mounted() {
    this.getWorkById(this.workId);
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_view-work.scss';
</style>
