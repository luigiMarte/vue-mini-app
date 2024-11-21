<template>
  <div
    v-if="isVisible"
    class="alert"
    :class="type === 'success' ? 'alert-success' : 'alert-error'"
  >
    <span>{{ text }}</span>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

const { text, duration, modelValue } = defineProps({
  text: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: "success",
  },
  duration: {
    type: Number,
    default: 3000,
  },
  modelValue: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["update:modelValue"]);
const isVisible = ref(false);

watch(
  () => modelValue,
  (newValue) => {
    if (newValue) {
      isVisible.value = true;
      setTimeout(() => {
        isVisible.value = false;
        emit("update:modelValue", false);
      }, duration);
    }
  }
);
</script>

<style lang="scss" scoped>
.alert {
  padding: 1rem;
  margin: 1rem 0;
  border: 1px solid transparent;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.alert-success {
  color: #155724;
  background-color: #d4edda;
  border-color: #c3e6cb;
}
.alert-error {
  color: #f6f4f3;
  background-color: #f33434;
  border-color: #c3e6cb;
}
</style>
