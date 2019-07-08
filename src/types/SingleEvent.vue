<script lang="ts">
import { Prop, Vue } from 'vue-property-decorator';

export default class SingleEvent extends Vue {
    @Prop() public title!: string;
    @Prop() public time!: string;
    @Prop() public host!: string;
    @Prop() public url!: string;
    @Prop() public lat!: number;
    @Prop() public lon!: number;
}
</script>
