<template>
  <h2>{{ $t("example_crud") }}</h2>
  <p>{{ $t("example_intro") }}</p>

  <input type="text" v-model="task" placeholder="Insert Task" />
  <button type="button" @click="addTask">{{ $t("add_task") }}</button>

  <div v-if="editionMode">
    <p>Edit user:</p>
    <input type="text" v-model="taskUpdate" />
    <button type="button" @click="updateTask">{{ $t("save_changes") }}</button>
    <button type="button" @click="cancelEdit">{{ $t("cancel") }}</button>
  </div>

  <ul v-if="tasksList.length">
    <li v-for="(task, index) in tasksList">
      {{ task }}
      <button @click="startEditing(index)">
        {{ editionMode && taskIndex === index ? "Cancel" : "Edit" }}
      </button>
      <button @click="removeTask(index)">{{ $t("remove") }}</button>
    </li>
  </ul>
</template>

<script setup>
import { ref } from "vue";

const task = ref("");
const tasksList = ref([]);
const editionMode = ref(false);
const taskIndex = ref(0);
const taskUpdate = ref("");

const addTask = () => {
  if (task.value.length === 0) return;
  tasksList.value.push(task.value.trim());
  task.value = "";
};

const startEditing = (index) => {
  if (editionMode.value && taskIndex.value === index) {
    cancelEdit();
    return;
  }
  taskIndex.value = index;
  taskUpdate.value = tasksList.value[index];
  editionMode.value = true;
};

const updateTask = () => {
  if (taskUpdate.value.trim().length === 0) return;
  tasksList.value.splice(taskIndex.value, 1, taskUpdate.value);
  cancelEdit();
};

const cancelEdit = () => {
  taskIndex.value = 0;
  taskUpdate.value = "";
  editionMode.value = false;
};

const removeTask = (index) => {
  tasksList.value.splice(index, 1);
};
</script>

<style lang="scss" scoped>
input {
  background-color: #d3d3d336;
  padding: 5px 10px;
  margin: 8px 5px;
  border: 1px solid rgb(55, 54, 54);
  border-radius: 4px;
  cursor: pointer;
}

/* CSS */
button {
  background-color: #fff;
  border: 1px solid #d5d9d9;
  border-radius: 8px;
  margin: 8px 5px;
  color: #0f1111;
  cursor: pointer;
  display: inline-block;
  font-size: 13px;
  line-height: 29px;
  padding: 0 10px 0 11px;
  text-align: center;
}

button:hover {
  background-color: #f7fafa;
}

button:focus {
  border-color: #008296;
  box-shadow: rgba(213, 217, 217, 0.5) 0 2px 5px 0;
  outline: 0;
}
</style>
