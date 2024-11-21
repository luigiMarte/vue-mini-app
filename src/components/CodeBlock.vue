<template>
  <pre><code ref="codeBlock" class="language-html">{{ code }}</code></pre>
</template>

<script setup>
import { onMounted, ref, watch } from "vue";
//import { usePrism } from "prismjs";
import Prism from "prismjs";

const props = defineProps({
  code: {
    type: String,
    required: true,
  },
});

const codeBlock = ref(null);

onMounted(() => {
  // Highlight code block after mounting
  Prism.highlightElement(codeBlock.value);
});

// Update result when code changes
watch(
  () => props.code,
  () => {
    Prism.highlightElement(codeBlock.value);
  }
);
</script>

<style scoped></style>
