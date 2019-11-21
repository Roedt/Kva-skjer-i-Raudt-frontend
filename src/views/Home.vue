<template>
    <div>
        <div v-for="event in events" :key="event.url+event.host" class="singleEvent">
            <div id="host">{{ event.host }}</div>
            <div id="link"><a :href=event.url target="_blank">{{ event.title }}</a></div>
            <div id="when">{{ event.formattedTime }}</div>
        </div>
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

div.singleEvent {
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  margin: 0.3em 0;
}

.singleEvent div {
  display: flex;
  justify-content: left;
  $mobile-max: 700px;
  text-align: left;
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
