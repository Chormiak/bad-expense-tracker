<script setup>
import { defineProps, defineEmits } from "vue";
const props = defineProps({
  filtered: Array,
  total: Number,
});
defineEmits("remove-expense");
</script>
<template>
  <h2>Lista do dia</h2>
  <table>
    <thead>
      <tr>
        <th>Descricao</th>
        <th>Categoria</th>
        <th>Valor</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in props.filtered" :key="item.id">
        <td>{{ item.title }}</td>
        <td>{{ item.category }}</td>
        <td>{{ item.value }}</td>
        <td>
          <button class="small-btn" @click="$emit('remove-expense', item.id)">
            X
          </button>
        </td>
      </tr>
    </tbody>
  </table>
  <div class="summary">Total do dia: {{ props.total }}</div>
</template>
<style scoped>
h2 {
  font-size: 1.15rem;
  text-align: center;
  margin-bottom: 1rem;
}
table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  text-align: left;
  padding: 0.5rem 0;
}
</style>
