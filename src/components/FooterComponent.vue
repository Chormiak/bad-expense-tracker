<script setup>
import { defineProps } from "vue";
const props = defineProps({ filter: String });
</script>
<template>
  <!-- no pai -->
  <!-- <FilterComponent v-model:filter="algumaVariavel" /> -->
  <nav>
    <!-- <button @click="emit('update:filter', 'all')">Tudo</button> -->
    <button class="small-btn" @click="props.filter = 'all'">Tudo</button>
    <button class="small-btn" @click="props.filter = 'food'">Comida</button>
    <button class="small-btn" @click="props.filter = 'transport'">
      Transporte
    </button>
    <button class="small-btn" @click="props.filter = 'other'">Outros</button>
    <button class="open-form-btn">+</button>
  </nav>
</template>
<style scoped>
nav {
  /* width: 100%; */
  display: flex;
  justify-content: center;
  align-items: end;
  gap: 0.5rem;
}

button {
  flex: 1;
  padding: 0.5rem;
  border-radius: 0.5rem;
  height: 2rem;
  background-color: firebrick;
  color: white;
  box-shadow: 0 0 0.5rem black;
  transition: scale 0.05s;
}

.open-form-btn {
  flex: auto;
  width: 3rem;
  height: 3rem;
}

button:hover {
  scale: 1.05;
}
button:active {
  scale: 0.95;
  opacity: 50%;
}
</style>
