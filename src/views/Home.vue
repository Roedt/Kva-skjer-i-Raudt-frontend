<template>
    <div class="home">
        <table id="eventsList"> 
            <!--TODO: denne tabellen er visst ikkje heilt fin på mobil. litt mediaqueries? -->
            <!--TODO: Lag eigen component av table-header? -->
            <thead>
                <tr>
                    <th v-for="column in columns" :key="column">
                        {{ column }}
                    </th>
                </tr>
            </thead>
        <!--TODO: Trekk ut TR-koden under til eigen component -->
            <tr v-for="event in sortedEvents" :key="event.url+event.host">
                <td> {{ event.host }} </td>
                <td> <a :href=event.url target="_blank">{{ event.title }}</a> </td>
                <td> {{ event.dayOfMonth + '. ' + event.month + ' kl. ' + event.timeOfDay }} </td>
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
        columns: ['Arrangør', 'Tittel', 'Tidspunkt'],
        tittel: 'Kva skjer i Raudt?' ,
        events: [] as SingleEvent[],
        apiCaller: APICaller.prototype,
        numberOfEvents: 0,
    }),
    mounted() {
        this.apiCaller = new APICaller((e: any) => this.events.push(e));
        this.$nextTick(() => {
            this.apiCaller.tick((x: any) => this.numberOfEvents = x);
        });
    },
    computed: {
        sortedEvents(): SingleEvent[] {
            if (this.numberOfEvents === this.events.length) {
                return this.events.sort((a, b) => this.sort(a, b));
            }
            return [];
        },
    },
    methods: {
        sort(a: SingleEvent, b: SingleEvent): number {
            return this.toInstant(a) - this.toInstant(b);
        },
        toInstant(event: SingleEvent): number {
            // TODO: dette burde ligge i event-klassa
            const hour = parseInt(event.timeOfDay.split('.')[0], 10);
            const minutes = parseInt(event.timeOfDay.split('.')[1], 10);
            const instant =  Date.parse(new Date().getFullYear()
                + '-'
                + event.month + '-'
                + event.dayOfMonth + ' ' + hour + ':' + minutes);
            return instant;
        },
    },
});
</script>
<style lang="scss" scoped>

h1 {
    margin: 2px;
}

table {
    margin: 0 auto;
    text-align: left;
}

$mobile-max: 700px;

td, th {
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
