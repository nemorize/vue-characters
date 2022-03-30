<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Character',
  props: ['char', 'lower'],
  data() {
    let c = this.$props.char ?? this.$options.name;
    c = this.$props.lower === 'true' ? c.toLowerCase() : c.toUpperCase();
    return { c }
  }
});
</script>

<template>
  {{ c }}
</template>
