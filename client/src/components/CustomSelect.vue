<script>
export default {
  props: ['modelValue'],
  emits: ['update:modelValue'],
  data() {
    return {
      units: ['°C', '°F'],
    };
  },
};
</script>

<template>
  <select
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  >
    <option v-for="unit in units" :key="unit">{{ unit }}</option>
  </select>
</template>

<style scoped>
select {
  flex-basis: 10%;
  height: inherit;
  font-size: 2rem;
}
</style>
