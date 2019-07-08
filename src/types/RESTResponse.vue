<script lang="ts">
import { Prop, Vue } from 'vue-property-decorator';
import SingleEvent from './SingleEvent.vue';

export default class RESTResponse extends Vue {
    @Prop() public data!: SingleEvent;
}
</script>
