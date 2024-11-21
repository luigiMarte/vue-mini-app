<template>
  <RoutesButton text="go back" goBack />
  <p>
    {{ $t("pinnia_exp_intro") }}
  </p>
  <h3>{{ $t("how_works") }}</h3>
  <p>
    {{ $t("pinnia_exp_pinnia") }}
  </p>
  <h3>{{ $t("how_component_works") }}</h3>
  <p>{{ $t("pinnia_exp_component") }}.</p>
</template>

<script setup>
import RoutesButton from "@/components/RoutesButton.vue";
//import CodeBlock from "@/components/CodeBlock.vue";
</script>
