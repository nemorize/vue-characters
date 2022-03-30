<script>
import { defineComponent } from 'vue';
import Character from "@/lib-components/Character";

export default defineComponent({
  name: 'Nbsp',
  extends: Character,
  data() {
    return {
      c: ' '
    };
  }
});
</script>