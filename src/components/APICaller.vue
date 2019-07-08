<script lang="ts">
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import SingleEvent from '../types/SingleEvent.vue';

Vue.use(VueAxios, axios);

// tslint:disable-next-line:max-line-length
const eventsLink: string = 'https://www.googleapis.com/storage/v1/b/fb-events2/o?prefix=events&fbclid=IwAR13SDH31uFm3hBeiR7i9pjF3ePV3VUB1qw1X5btoG03YKLIZWkwqnbzq34';

// tslint:disable-next-line:max-line-length

interface MetaEvent {
    mediaLink: string;
}

interface RESTResponse {
    data: SingleEvent;
}

export default class APICaller extends Vue {
    private tittel!: 'Kva skjer i Raudt?';
    private events!: SingleEvent[];
    private eventsLink!: string;

    constructor(listener: any) {
        super();
        this.eventsLink = eventsLink;
        this.events = [];
        this.$nextTick(() => {
            this.makeAPICall(this.eventsLink, (r: any) => this.handleResponse(r.data.items, listener));
        });
    }

    public makeAPICall(url: string, callback: (callback: any) => void): void {
            Vue.axios
            .get(url)
            .then((response: any) => callback(response));
    }

    private handleResponse(items: MetaEvent[], listener: any): void {
        for (const ev of Object.values(items)) {
            this.makeAPICall(ev.mediaLink, (r: RESTResponse) => {
                const event = r.data;
                if (event.time === undefined) {
                    return;
                }
                event.time = event.time.replace(' â', ' -').replace('UTC+02', '');
                event.time = event.time.replace(' at ', ' ').split(' - ')[0];
                event.time = event.time.replace(' Â·', '');

                if (Date.now() > Date.parse(event.time)) {
                    return;
                }

                event.url = event.url.replace('//m.', '//www.');

                this.events.push(event);
                listener(event);
            },
            );
        }
    }
}
</script>