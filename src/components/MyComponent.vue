// MyComponent.vue (Vue 2)
<template>
  <div>
    <h2>{{ title }}</h2>

    <p v-if="loading">Loading users...</p>
    <p v-else-if="apiData.length > 0">{{ totalUsers }} {{ userCount }}</p>

    <ul v-if="apiData.length > 0">
      <li v-for="user in apiData" :key="user.id">
        {{ user.name }}
        <button @click="removeUser(user.id)">Remove</button>
      </li>
    </ul>

    <p v-else>No hay usuarios</p>

    <!-- Campo de entrada para el nombre del nuevo usuario -->
    <input v-model="newUserName" placeholder="Enter new user name" />
    <button @click="addUser">Add User</button>

    <div v-if="apiError">
      <p>Error: {{ errorMessage }}</p>
    </div>
  </div>
</template>

<script>
import { apiMixin } from "../mixins/ApiMixin";

export default {
  mixins: [apiMixin],
  props: {
    title: {
      Type: String,
      Required: true,
    },
  },
  data() {
    return {
      loading: false,
      errorMessage: "An error occurred while fetching users",
      newUserName: "", // Variable para almacenar el nombre del nuevo usuario
    };
  },
  computed: {
    userCount() {
      return this.apiData.length;
    },
    totalUsers() {
      return this.apiData.length > 0 ? "Total users :" : "There is no users";
    },
  },
  watch: {
    apiData(newValue, oldValue) {
      console.log(
        `User list changed: now we have ${newValue.length} users (was ${oldValue.length})`
      );
    },
  },
  methods: {
    addUser() {
      if (this.newUserName.trim() !== "") {
        const newUser = {
          id: this.apiData.length + 1,
          name: this.newUserName,
        };
        this.apiData.push(newUser);
        this.newUserName = "";
      } else {
        alert("Please enter a name for the new user.");
      }
    },

    removeUser(id) {
      this.apiData = this.apiData.filter((user) => user.id !== id);
    },
  },
  mounted() {
    this.loading = true;
    this.fetchData("https://jsonplaceholder.typicode.com/users")
      .then(() => {
        this.loading = false;
      })
      .catch(() => {
        this.loading = false;
        this.apiError = true;
      });
  },
};
</script>
