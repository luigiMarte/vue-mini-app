// MyComponent.vue Composition API
<template>
  <div>
    <h2>{{ title }}</h2>

    <p v-if="loading">Loading users...</p>
    <!--  <p v-else-if="apiData.length > 0">{{ totalUsers }} {{ userCount }}</p>-->

    <!-- <ul v-if="apiData.length > 0">
      <li v-for="user in apiData" :key="user.id">
        {{ user.name }}
        <button @click="removeUser(user.id)">Remove</button>
      </li>
    </ul> -->

    <p v-else>No hay usuarios</p>

    <!-- Campo de entrada para el nombre del nuevo usuario -->
    <input v-model="newUserName" placeholder="Enter new user name" />
    <button @click="addUser">Add User</button>

    <div v-if="apiError">
      <p>Error: {{ errorMessage }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps } from "vue";
import { useApi } from "../composables/ApiCompo";

const props = defineProps(["title"]);

const loading = ref(false);
const errorMessage = ref("An error occurred while fetching users");
const newUserName = ref("");
</script>
