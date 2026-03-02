import { computed, ref } from "vue";

/* lista */
const expenses = ref([
  { id: 1, title: "Cafe", value: 6, category: "food" },
  { id: 2, title: "Onibus", value: 4.5, category: "transport" },
  { id: 3, title: "Lanche", value: 12, category: "food" },
]);

/* formulario */
const title = ref("");
const value = ref("");
const category = ref("");

/* filtro */
const filter = ref("all");

/* função que filtra automaticamente */
const filtered = computed(() => {
  if (filter.value === "all") {
    return expenses.value;
  }
  return expenses.value.filter((item) => item.category === filter.value);
});

/* calcula o total */
const total = computed(() => {
  return expenses.value.reduce((sum, item) => sum + Number(item.value || 0), 0);
});

/* adicionar item na lista */
function addExpense() {
  if (!title.value.trim() || !value.value.trim()) {
    alert("Preencha tudo");
    return;
  }
  expenses.value.push({
    id: Date.now(),
    title: title.value,
    value: value.value,
    category: category.value || "other",
  });
  title.value = "";
  value.value = "";
  category.value = "";
}

/* remover item da lista */
function removeExpense(id) {
  expenses.value = expenses.value.filter((item) => item.id !== id);
}

/* limpar tudo */
function clearAll() {
  if (!confirm("Tem certeza?")) {
    return;
  }
  expenses.value = [];
}

export {
  expenses,
  title,
  value,
  category,
  filter,
  filtered,
  total,
  addExpense,
  removeExpense,
  clearAll,
};
