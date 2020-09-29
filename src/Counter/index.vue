<template>
  <div v-bind:class="styles">
    <button @click="dec" class="dec">-</button>
    <span class="count">{{ count }}</span>
    <button @click="inc" class="inc">+</button>
  </div>
</template>

<script>
import styles from "./styles";

export default {
  props: { initialCount: Number },
  data() {
    return {
      count: this.initialCount,
    };
  },
  methods: {
    inc() {
      this.count += 1;
    },
    dec() {
      if (this.count !== 0) this.count -= 1;
    },
  },
  computed: {
    styles: () => styles,
  },
};
</script>
