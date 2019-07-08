<template>
    <div class="home">
        <img alt="Page logo" class="logo" src="../assets/nynorsklogo.png">
        <h1> {{ tittel }} </h1>
        <table id="eventsList">
            <tr>
                <th>Tittel</th>
                <th>Tidspunkt</th>
                <th>Arrangør</th>
            </tr>
            <tr v-for="event in events" :key="event.url+event.host">
                <td> <a :href=event.url>{{ event.title }}</a> </td>
                <td> {{ event.time }} </td>
                <td> {{ event.host }} </td>
            </tr>
        </table>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import SingleEvent from '../types/SingleEvent.vue';
import APICaller from '../components/APICaller.vue';


export default Vue.extend({
    data: () => ({
        tittel: 'Kva skjer i Raudt?' ,
        events: [] as SingleEvent[],
    }),
    mounted() {
        const apicaller = new APICaller((e: any) => this.events.push(e));
    },
});
</script>
<style lang="scss" scoped>

table {
    margin: 0 auto;
    text-align: left;
}

td, th {
    padding: 0.2rem 1.5rem;
}

img {
    width: 10%;
    height: 10%;
}
</style>
