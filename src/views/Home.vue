<template>
    <div class="home">
        <img alt="Page logo" class="logo" src="../assets/nynorsklogo.png">
        <h1> {{ tittel }} </h1>
        <table id="eventsList">
            <tr>
                <th>Tittel</th>
                <th>Tidspunkt</th>
                <th>Arrangør</th>
                <th>URL</th>
            </tr>
            <tr v-for="event in events">
                <td> {{ event.title }} </td>
                <td> {{ event.time }} </td>
                <td> {{ event.host }} </td>
                <td> <a :href=event.url>URL</a> </td>
            </tr>
        </table>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import MetaEvent from '../types/MetaEvent.vue';
import RESTResponse from '../types/RESTResponse.vue';
import SingleEvent from '../types/SingleEvent.vue';

Vue.use(VueAxios, axios);

// tslint:disable-next-line:max-line-length
const eventsLink: string = 'https://www.googleapis.com/storage/v1/b/fb-events2/o?prefix=events&fbclid=IwAR13SDH31uFm3hBeiR7i9pjF3ePV3VUB1qw1X5btoG03YKLIZWkwqnbzq34';

export default Vue.extend({
    data: () => ({
        tittel: 'Kva skjer i Raudt?' ,
        events: [] as SingleEvent[],
    }),
    methods: {
        handleResponse(items: MetaEvent[]): void {
            for (const ev of Object.values(items)) {
                this.makeAPICall(ev.mediaLink, (r: RESTResponse) => {
                    const event = r.data;
                    event.time = event.time.replace(' â', ' -').replace('UTC+02', '');
                    event.time = event.time.replace(' at ', ' ').split(' - ')[0];
                    event.time = event.time.replace(' Â·', '');

                    if (Date.now() > Date.parse(event.time)) {
                        return;
                    }

                    event.url = event.url.replace('//m.', '//www.');

                    this.events.push(event);
                },
                );
            }
        },
        makeAPICall(url: string, callback: (callback: any) => void): void {
            Vue.axios
            .get(url)
            .then((response: any) => callback(response));
        },
    },
    mounted() {
        this.makeAPICall(eventsLink, (r: any) => this.handleResponse(r.data.items));
    },
});
</script>
<style lang="scss" scoped>

table {
    margin: 0 auto;
}

img {
    width: 10%;
    height: 10%;
}
</style>
