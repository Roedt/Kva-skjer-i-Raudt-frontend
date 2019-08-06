<template>
    <div class="home">

    <v-container
      fluid
      grid-list-md
      pa-2
    >
        <v-layout column>
            <v-flex v-for="event in sortedEvents" :key="event.url+event.host">
                <v-card class="mx-auto" width="100%"
            >
                    <v-card-title
                class="fill-height align-end"
                style="word-break: break-word"
                v-text="event.title"></v-card-title>
                    <v-card-text>{{ event.host }}<br />{{ event.dayOfMonth + '. ' + event.month + ' kl. ' + event.timeOfDay }}</v-card-text>
                    <v-card-actions style="word-break: break-word">
                        <v-btn text style="word-break: break-word"><a :href=event.url target="_blank">Til hendinga</a></v-btn>
                        <v-spacer></v-spacer>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
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
