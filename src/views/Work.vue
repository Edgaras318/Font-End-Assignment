<template>
<div id="work">
  <WorkHeader />
  <section class="work-container">
    <div class="filter-group-container c-padding">
      <div class="filter-container">
        <span class="filter-container__title">Show me</span>
        <div>
          <span class="filter-container__placeholder"> {{selectedPlaceholder}}</span>
          <img src="@/assets/icons/select-triangle.svg" alt="" class="filter-container__icon">
          <select v-model="selectedPlaceholder" class="filter-container__select">
            <option value="all industries">all industries</option>
            <option v-for="(industry, index) in filtererIndustries" :key="index">
              {{ industry.industry }}
            </option>
          </select>
        </div>

      </div>
    </div>
    <article v-scrollanimation class="work c-padding" v-for="work in filteredWorks" :key="work.id">
      <router-link :to="{ name: 'ViewWork', params: {work_id: work.id}}">
        <img :src="work.image" :alt="work.alt" class="work__img">
        <span class="work__label">{{ work.name }}</span>
        <h3 class="work__title">{{ work.title }}</h3>
        <div class="viewcase-container">
          <img src="@/assets/icons/blue-arrow.svg" alt="" />
          <span class="work__button">View case </span>
        </div>
      </router-link>
    </article>
  </section>
  <Clients />
</div>
</template>

<script>
import WorkHeader from '@/components/WorkHeader';
import Clients from '@/components/Clients';
import worksData from '@/Data/worksData';

export default {
  name: 'Work',
  components: {
    WorkHeader,
    Clients
  },
  data() {
    return {
      works: worksData,
      selectedPlaceholder: 'all industries'
    }
  },
  computed: {
    filteredWorks() {
      return this.works.filter(work => {
        if (this.selectedPlaceholder === 'all industries') {
          return work.industry;
        } else {
          return work.industry.match(this.selectedPlaceholder);
        }
      });
    },
    filtererIndustries() {
      return [...new Map(this.works.map(item => [item['industry'], item])).values()]
    }

  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_work.scss'
</style>
