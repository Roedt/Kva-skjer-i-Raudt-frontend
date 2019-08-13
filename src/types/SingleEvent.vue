<script lang="ts">
import { Prop, Vue } from 'vue-property-decorator';

export default class SingleEvent extends Vue {
    @Prop() public title!: string;
    @Prop() public month!: string;
    @Prop() public dayOfMonth!: number;
    @Prop() public timeOfDay!: string;
    @Prop() public host!: string;
    @Prop() public url!: string;
    @Prop() public lat!: number;
    @Prop() public lon!: number;
    @Prop() public preciseTime!: any;

    @Prop() public latlng!: any;
    @Prop() public popup!: string;

    @Prop() public formattedTime!: string;
}
</script>
