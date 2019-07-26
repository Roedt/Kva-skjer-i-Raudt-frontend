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

const months = new Map<string, string>([
    ['JAN', 'januar'],
    ['FEB', 'februar'],
    ['MAR', 'mars'],
    ['APR', 'april'],
    ['MAY', 'mai'],
    ['JUN', 'juni'],
    ['JUL', 'juli'],
    ['AUG', 'august'],
    ['SEP', 'september'],
    ['OCT', 'oktober'],
    ['NOV', 'november'],
    ['DEC', 'desember'],
]);

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

    private replaceMonth(month: string): any {
        return months.get(month);
    }

    private handleResponse(items: MetaEvent[], listener: any): void {
        for (const ev of Object.values(items)) {
            this.makeAPICall(ev.mediaLink, (r: RESTResponse) => {
                const event = r.data;
                if (event.url === undefined) {
                    return;
                }
                if (event.lat !== undefined && event.lon !== undefined) {
                    event.latlng = [event.lat, event.lon];
                }
                if (Date.now() > Date.parse(new Date().getFullYear() + '-' + event.month
                    + '-' + event.dayOfMonth + '-23:59:59')) {
                    return;
                }
                event.month = this.replaceMonth(event.month);

                event.url = event.url.replace('//m.', '//www.');
                event.popup = event.dayOfMonth + '. ' + event.month + ' kl. ' + event.timeOfDay
                + '<br/><a href='
                + event.url + '>'
                + event.title + '</a> (' + event.host + ')';

                this.events.push(event);
                listener(event);
            },
            );
        }
    }
}
</script>