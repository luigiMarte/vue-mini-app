<template>
  <button v-if="goBack" @click="$router.go(-1)">{{ $t("go_back") }}</button>
  <button v-else @click="$router.push({ name: routeName })">
    {{ text }}
  </button>
</template>

<script setup>
const { text, routeName, goBack } = defineProps({
  text: {
    type: String,
    required: true,
  },
  routeName: {
    type: String,
  },
  goBack: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="css" scoped>
button {
  background: transparent;
  border: 2px solid rgb(69, 30, 153);
  color: rgb(69, 30, 153);
  border-radius: 5px;
  padding: 8px 10px;
  font-size: 15px;
  cursor: pointer;
}
</style>
