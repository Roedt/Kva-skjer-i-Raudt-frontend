<script lang="ts">
import Vue from 'vue';
import SingleEvent from './types/SingleEvent.vue';
import RESTResponse from '@/types/RESTResponse';
import moment from 'moment';

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

export default class EventFactory extends Vue {

    public static toEvents(values: any[]): SingleEvent[] {
        const events = [] as SingleEvent[];
        const eventFactory = new EventFactory();
        values.forEach((ev: any) => {
            events.push(eventFactory.createEvent(ev));
        });
        values.sort((a, b) => a.title - b.title);
        return events;
    }

    public createEvent(response: RESTResponse): any {
        return this.convertToEvent(response);
    }

    private replaceMonth(month: string): string {
        const monthObject = months.find((m) => m[0] === month);
        if (monthObject === undefined) {
            return month;
        }
        return monthObject[1];
    }

    private formatTime(event: SingleEvent): string {
        return moment(event.preciseTime, 'YYYYMMDDHHmm').format('DD. [' + event.month + ' kl.] HH.mm');
    }

    private createEventPopup(event: SingleEvent): string {
        return this.formatTime(event)
                + '<br/><a href='
                + event.url + ' target="_blank" >'
                + event.title + '</a> (' + event.host + ')';
    }

    private convertToEvent(response: RESTResponse): any {
        const event = (response.data as SingleEvent);
        if (event.url === undefined) {
            return null;
        }
        if (event.lat !== undefined && event.lon !== undefined) {
            event.latlng = [event.lat, event.lon];
        }
        event.month = this.replaceMonth(event.month);
        event.title = event.title.replace(/&amp;/g, 'og');
        event.title = event.title.replace(/&quot;/g, '"');

        event.url = event.url.replace('//m.', '//www.');
        event.popup = this.createEventPopup(event);
        event.formattedTime = moment(event.preciseTime, 'YYYYMMDDHHmm').format('DD. [' + event.month + ' kl.] HH.mm');
        return event;
    }

}

</script>
