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
    placeholder="Enter the temperature"
  />
</template>

<style scoped>
input {
  height: 50px;
  width: 100%;
  font-size: 2rem;
}
</style>
