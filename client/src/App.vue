<script setup>
import { computed, reactive } from 'vue';
import CustomButton from './components/CustomButton.vue';
import CustomInput from './components/CustomInput.vue';
import CustomLabel from './components/CustomLabel.vue';
import CustomSelect from './components/CustomSelect.vue';
import Header from './components/Header.vue';

const BASE_API = 'http://0.0.0.0:8080/api';

const state = reactive({
  temperature: '',
  unit: '°C',
  previousUnitSelected: '°C',
  result: null,
});

const options = {
  method: 'POST',
  mode: 'cors',
  headers: {
    'Content-Type': 'application/json',
  },
  body: null,
};

const convertTemperature = async () => {
  if (state.temperature.length === 0) return;

  const payload = JSON.stringify({ temperature: state.temperature });

  if (state.unit === '°C') {
    const response = await fetch(`${BASE_API}/celsius-to-fahrenheit`, {
      ...options,
      body: payload,
    })
      .then((data) => data.json())
      .then((temperature) => temperature);

    const { result } = response;

    state.result = result;
  } else if (state.unit === '°F') {
    const response = await fetch(`${BASE_API}/fahrenheit-to-celsius`, {
      ...options,
      body: payload,
    })
      .then((data) => data.json())
      .then((temperature) => temperature);

    const { result } = response;

    state.result = result;
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
  <CustomButton @convert-temperature="convertTemperature">
    Convert
  </CustomButton>
  <CustomLabel v-if="state.result || state.result === 0">
    {{ formattedResult }}
  </CustomLabel>
</template>

<style scoped>
#inputs-container {
  margin-top: 0.75em;
  height: 50px;
  display: flex;
  justify-content: center;
  gap: 5px;
}
</style>
