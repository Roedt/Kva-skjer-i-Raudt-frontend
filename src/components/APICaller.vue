<script lang="ts">
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import SingleEvent from '@/types/SingleEvent.vue';
import RESTResponse from '@/types/RESTResponse.ts';
import EventFactory from '@/EventFactory.vue';
import moment from 'moment';

Vue.use(VueAxios, axios);

interface MetaEvent {
    mediaLink: string;
}

export default class APICaller extends Vue {
    private tittel!: 'Kva skjer i Raudt?';
    private events!: SingleEvent[];
    private eventsLink!: string;
    private listener: any;

    constructor(listener: any) {
        super();
        const timeWhenSureAllAreFetchedForToday = moment('02:15:00', 'HH:mm:ss');
        // tslint:disable-next-line:max-line-length
        const dayToFetchFrom = moment().isAfter(timeWhenSureAllAreFetchedForToday) ? moment() : moment().subtract(1, 'days');
        // tslint:disable-next-line:max-line-length
        this.eventsLink = 'https://www.googleapis.com/storage/v1/b/fb-events2/o?prefix=events/' + dayToFetchFrom.format('YYYYMMDD') + '&fbclid=IwAR13SDH31uFm3hBeiR7i9pjF3ePV3VUB1qw1X5btoG03YKLIZWkwqnbzq34';
        this.events = [];
        this.listener = listener;
    }

    public tick(): void {
        this.makeAPICall(this.eventsLink, (r: any) => this.handleResponse(r.data.items, this.listener));
    }

    public makeAPICall(url: string, callback: (callback: any) => void): void {
            Vue.axios
            .get(url)
            .then((response: any) => callback(response));
    }

    private handleResponse(items: MetaEvent[], listener: any): void {
        for (const ev of Object.values(items)) {
                this.makeAPICall(ev.mediaLink, (r: RESTResponse) => {
                    new EventFactory().createEvent(r, (event: SingleEvent) => {
                        this.events.push(event);
                        listener(event);
                    });
                },
            );
        }
    }
}
</script>