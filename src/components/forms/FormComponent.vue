<script setup>
import { defineProps, defineEmits } from "vue";
const props = defineProps({
  title: String,
  value: String,
  category: String,
});
defineEmits(["add-expense", "clear-all"]);
</script>
<template>
  <div class="panel">
    <h2>Nova despesa</h2>
    <p>
      <label>Título</label>
      <input v-model="props.title" class="input" placeholder="Descricao" />
    </p>
    <p>
      <label>Valor</label>
      <input v-model="props.value" class="input" placeholder="Valor" />
    </p>
    <p>
      <label>Categoria</label>
      <input v-model="props.category" class="input" placeholder="Categoria" />
    </p>
    <div class="row">
      <button class="small-btn" @click="$emit('add-expense')">Add</button>
      <button class="small-btn" @click="$emit('clear-all')">Limpar tudo</button>
    </div>
  </div>
</template>
