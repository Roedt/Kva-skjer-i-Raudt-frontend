<template>
    <div>
        <grid-container v-for="event in events" :key="event.url+event.host" class="singleEvent">
            <grid-item id="host">{{ event.host }}</grid-item>
            <grid-item id="link"><a :href=event.url target="_blank">{{ event.title }}</a></grid-item>
            <grid-item id="when">{{ event.formattedTime }}</grid-item>
        </grid-container>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import SingleEvent from '../types/SingleEvent.vue';
import APICaller from '../components/APICaller.vue';

export default Vue.extend({
    data: () => ({
        columns: ['Arrangør', 'Tittel', 'Tidspunkt'],
        tittel: 'Kva skjer i Raudt?' ,
        events: [] as SingleEvent[],
    }),
    mounted() {
        this.$nextTick(() => {
            new APICaller().tick((events: SingleEvent[]) => this.events = events);
        });
    },
});
</script>
<style lang="scss" scoped>

grid-container {
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
}

grid-item {
  display: flex;
  justify-content: left;
  $mobile-max: 700px;
  @media screen and (max-width: $mobile-max) {
      padding: 0.2rem 0.1rem;
      margin: 0.3rem 0.1rem;
      word-break: break-word;
  }
  @media screen and (min-width: $mobile-max) {
      padding: 0.2rem 1.5rem;
  }
}

img {
    width: 10%;
    height: 10%;
}
</style>
