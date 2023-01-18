<script>
export default {
  props: ['modelValue'],
  emits: ['update:modelValue'],
};
</script>

<template>
  <input
    type="number"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    placeholder="Enter the temperature value ..."
  />
</template>

<style scoped>
input {
  flex-basis: 90%;
  height: inherit;
  font-size: 2rem;
  text-align: right;
}
</style>
