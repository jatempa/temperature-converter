<script setup>
import { reactive } from 'vue';
import CustomInput from './components/CustomInput.vue';
import Header from './components/Header.vue';

const state = reactive({
  temperatureVal: '',
  unit: '',
});
</script>

<template>
  <Header>Temperature Converter</Header>
  <CustomInput v-model.number="state.temperatureVal" />
  {{ state.temperatureVal }}
</template>
