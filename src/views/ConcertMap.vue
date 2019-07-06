<template>
  <div class="concertmap">
    <Map header="Upcoming concerts" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Map from '@/components/Map.vue';

@Component({
  components: {
    Map,
  },
})

export default class ConcertMap extends Vue {}


</script>
