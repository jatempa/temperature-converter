<script setup>
import { computed, reactive } from 'vue';
import CustomButton from './components/CustomButton.vue';
import CustomInput from './components/CustomInput.vue';
import CustomLabel from './components/CustomLabel.vue';
import CustomSelect from './components/CustomSelect.vue';
import Header from './components/Header.vue';

const state = reactive({
  temperature: '',
  unit: '°C',
  previousUnitSelected: '°C',
  result: null,
});

const convertTemperature = () => {
  if (state.temperature.length === 0) return;

  if (state.unit === '°C') {
    state.result = (state.temperature * 9) / 5 + 32;
  } else if (state.unit === '°F') {
    state.result = ((state.temperature - 32) * 5) / 9;
  }
};

const formattedResult = computed(() => {
  if (state.previousUnitSelected !== state.unit) {
    state.temperature = '';
    state.result = null;
  }

  if (state.unit === '°C') {
    state.previousUnitSelected = '°C';
    return `${state.result} °F`;
  }

  state.previousUnitSelected = '°F';
  return `${state.result} °C`;
});
</script>

<template>
  <Header>Temperature Converter</Header>
  <div id="inputs-container">
    <CustomInput v-model.number="state.temperature" />
    <CustomSelect v-model="state.unit" />
  </div>
  <CustomButton @convert-temperature="convertTemperature">Convert</CustomButton>
  <CustomLabel v-if="state.result || state.result === 0">{{
    formattedResult
  }}</CustomLabel>
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
