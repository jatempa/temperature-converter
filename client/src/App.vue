<script setup>
import { computed, reactive } from 'vue';
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

const customFetch = async (endpoint, payload) => {
  const response = await fetch(`${BASE_API}/${endpoint}`, {
    ...options,
    body: payload,
  })
    .then((data) => data.json())
    .then((temperature) => temperature);

  return response;
};

const convertTemperature = async () => {
  if (state.temperature.length === 0) return;

  const payload = JSON.stringify({ temperature: state.temperature });

  if (state.unit === '°C') {
    const { result } = await customFetch('celsius-to-fahrenheit', payload);
    state.result = result;
  } else if (state.unit === '°F') {
    const { result } = await customFetch('fahrenheit-to-celsius', payload);
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
  <form @submit.prevent="convertTemperature">
    <div id="inputs-container">
      <CustomInput v-model.number="state.temperature" />
      <CustomSelect v-model="state.unit" />
    </div>
    <button type="submit">Convert</button>
  </form>
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

button {
  margin-top: 0.75em;
  width: 100%;
  height: 50px;
  font-size: 2rem;
  font-weight: bold;
  text-transform: uppercase;
  color: white;
  background-color: rgb(87, 174, 245);
  border: none;
  outline: none;
}
</style>
