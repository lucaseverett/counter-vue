<template>
  <div v-bind:class="styles"><Counter :initialCount="0" /></div>
</template>

<script>
import Counter from "../Counter";
import styles from "./styles";

export default {
  components: {
    Counter,
  },
  computed: {
    styles: () => styles,
  },
};
</script>
