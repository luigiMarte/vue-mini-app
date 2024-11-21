<template>
  <h1>{{ $t("welcome") }}</h1>
  <p>
    {{ $t("home_intro") }}
  </p>
  <h3>{{ $t("how_to_use") }}</h3>
  <p>
    {{ $t("home_select_lang") }}
  </p>
  <p>
    {{ $t("home_instructions") }}
  </p>
  <div>
    <ul>
      <li v-for="task in tasksArray">{{ task }}</li>
    </ul>
    <router-link to="/slots"></router-link>
  </div>
</template>

<script setup>
import { ref } from "vue";

const tasksArray = ref([
  "componentes dinamicos",
  "formularios",
  "filtros y busquedas",
  "migration v2 a v3",
  "store pinnia",
  "options api vs composition api",
  "graficas",
  "testing",
  "lazy loading",
  "injection",
]);
</script>
