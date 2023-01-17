<script>
export default {
  data: () => ({
    temperatureVal: '',
  }),
  emits: ['handle-change'],
  methods: {
    getTemperatureVal() {
      this.$emit('handle-change', this.temperatureVal);
      this.temperatureVal = '';
    },
  },
};
</script>

<template>
  <input
    :value="temperatureVal"
    @input="temperatureVal = $event.target.value"
    @keyup.enter="getTemperatureVal"
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
