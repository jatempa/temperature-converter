<template>
  <button>
    <slot></slot>
  </button>
</template>

<style scoped>
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
