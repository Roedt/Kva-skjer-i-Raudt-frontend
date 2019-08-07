<script lang="ts">
import Vue from 'vue';
import SingleEvent from './types/SingleEvent.vue';
import RESTResponse from '@/types/RESTResponse.ts';

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
    public createEvent(response: RESTResponse, callback: any): void {
        this.convertToEvent(response, callback);
    }

    private replaceMonth(month: string): string {
        const monthObject = months.find((m) => m[0] === month);
        if (monthObject === undefined) {
            return month;
        }
        return monthObject[1];
    }

    private formatTime(event: SingleEvent): string {
        return event.dayOfMonth + '. ' + event.month + ' kl. ' + event.timeOfDay;
    }

    private createEventPopup(event: SingleEvent): string {
        return this.formatTime(event)
                + '<br/><a href='
                + event.url + ' target="_blank" >'
                + event.title + '</a> (' + event.host + ')';
    }

    private convertToEvent(response: RESTResponse, callback: any): void {
        const event = (response.data as SingleEvent);
        if (event.url === undefined) {
            return;
        }
        if (event.lat !== undefined && event.lon !== undefined) {
            event.latlng = [event.lat, event.lon];
        }
        event.month = this.replaceMonth(event.month);

        event.url = event.url.replace('//m.', '//www.');
        event.popup = this.createEventPopup(event);

        callback(event);
    }

}

</script>
