<template>
  <div>
    <h2>{{ $t("get_users") }}</h2>
    <RoutesButton :text="$t('view_expl')" route-name="axios-explanation" />

    <p>{{ $t("get_users_intro") }}</p>

    <p v-if="loading">{{ $t("loading") }}</p>
    <SimpleCard v-else>
      <template #header> {{ $t("users_list") }} </template>
      <ul v-if="usersList" class="user-list">
        <li v-for="user in usersList" :key="user.id" class="user-item">
          <p>
            <span class="user-info">{{ $t("user") }}: </span>{{ user.name }}
          </p>
          <p>
            <span class="user-info">{{ $t("email") }}: </span> {{ user.email }}
          </p>
        </li>
      </ul>
      <template #footer> {{ usersList.length }} {{ $t("users") }} </template>
    </SimpleCard>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import SimpleCard from "@/components/SimpleCard.vue";
import { fetchUsers } from "@/api/endpoints/users/usersApi";
import RoutesButton from "@/components/RoutesButton.vue";

const usersList = ref([]);
const loading = ref(false);

const getUsers = async () => {
  loading.value = true;
  try {
    const response = await fetchUsers();
    usersList.value = response.data.filter((n) => n.id <= 5);
  } catch (error) {
    console.log("Error: ", error);
  }
  loading.value = false;
};

onMounted(getUsers);
</script>

<style scoped>
.user-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.user-item {
  border-bottom: 1px solid #ddd;
}

.user-info {
  font-weight: bold;
  color: #555;
}
</style>
