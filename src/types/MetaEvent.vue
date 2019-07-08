<script lang="ts">
import { Prop, Vue } from 'vue-property-decorator';

export default class MetaEvent extends Vue {
    @Prop() public mediaLink!: string;
}
</script>
