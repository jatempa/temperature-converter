<script setup>
import { reactive } from 'vue';
import CustomInput from './components/CustomInput.vue';
import CustomSelect from './components/CustomSelect.vue';
import Header from './components/Header.vue';

const state = reactive({
  temperature: '',
  unit: '°C',
});
</script>

<template>
  <Header>Temperature Converter</Header>
  <div id="inputs-container">
    <CustomInput v-model.number="state.temperature" />
    <CustomSelect v-model="state.unit" />
  </div>
</template>

<style scoped>
#inputs-container {
  margin: 1.25em 0px;
  height: 50px;
  display: flex;
  justify-content: center;
  gap: 5px;
}
</style>
