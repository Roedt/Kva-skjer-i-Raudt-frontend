<script lang="ts">
import { Prop, Vue } from 'vue-property-decorator';

export default class ConcertEvent extends Vue {

    @Prop() private lat!: number;
    @Prop() private lon!: number;

    constructor(lat: number, lon: number) {
        super();
        this.lat = lat;
        this.lon = lon;
    }

    public getLat() {
        return this.lat;
    }

    public getLon() {
        return this.lon;
    }
}
</script>
