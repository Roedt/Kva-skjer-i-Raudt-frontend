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

const months = [
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
];

export default class APICaller extends Vue {
    private tittel!: 'Kva skjer i Raudt?';
    private events!: SingleEvent[];
    private eventsLink!: string;
    private listener: any;

    constructor(listener: any) {
        super();
        this.eventsLink = eventsLink;
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

    private replaceMonth(month: string): any {
        const monthObject = months.find((m) => m[0] === month);
        if (monthObject === undefined) {
            return month;
        }
        return monthObject[1];
    }

    private dateHasPassed(event: SingleEvent): boolean {
        return Date.now() > Date.parse(new Date().getFullYear() + '-' + event.month
                    + '-' + event.dayOfMonth + '-23:59:59');
    }

    private createEventPopup(event: SingleEvent): string {
        return event.dayOfMonth + '. ' + event.month + ' kl. ' + event.timeOfDay
                + '<br/><a href='
                + event.url + ' target="_blank" >'
                + event.title + '</a> (' + event.host + ')';
    }

    private convertToEvent(response: RESTResponse, callback: any): void {
        const event = response.data;
        if (event.url === undefined) {
            return;
        }
        if (event.lat !== undefined && event.lon !== undefined) {
            event.latlng = [event.lat, event.lon];
        }
        if (this.dateHasPassed(event)) {
            return;
        }
        event.month = this.replaceMonth(event.month);

        event.url = event.url.replace('//m.', '//www.');
        event.popup = this.createEventPopup(event);

        callback(event);
    }

    private handleResponse(items: MetaEvent[], listener: any): void {
        for (const ev of Object.values(items)) {
                this.makeAPICall(ev.mediaLink, (r: RESTResponse) => {
                    this.convertToEvent(r, (event: SingleEvent) => {
                        this.events.push(event);
                        listener(event);
                    });
                },
            );
        }
    }
}
</script>