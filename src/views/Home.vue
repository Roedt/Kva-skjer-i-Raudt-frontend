<template>
    <div class="home">
        <h1> {{ tittel }} </h1>
        <table id="eventsList">
            <thead>
                <tr>
                    <th v-for="column in columns" :key="column">
                        {{ column }}
                    </th>
                </tr>
            </thead>
            <tr v-for="event in sortedEvents" :key="event.url+event.host">
                <td> {{ event.host }} </td>
                <td> <a :href=event.url>{{ event.title }}</a> </td>
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
    }),
    mounted() {
        this.apiCaller = new APICaller((e: any) => this.events.push(e));
        this.$nextTick(() => {
            this.apiCaller.tick();
        });
    },
    computed: {
        sortedEvents(): SingleEvent[] {
            return this.events.sort((a, b) => this.toInstant(a) - this.toInstant(b));
        },
    },
    methods: {
        toInstant(event: SingleEvent): number {
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

td, th {
    @media screen and (max-width: 700px) {
        padding: 0.2rem 0.5rem;
    }
    @media screen and (min-width: 700px) {
        padding: 0.2rem 1.5rem;
    }
}

img {
    width: 10%;
    height: 10%;
}
</style>
