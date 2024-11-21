<template>
  <div>
    <h3>{{ $t("example_card_compnet_st") }}</h3>
    <RoutesButton text="go back" goBack />
    <CodeBlock :code="cardCode" />
    <h3>{{ $t("how_to_use_component") }}</h3>
    <CodeBlock :code="viewCode" />
  </div>
</template>

<script setup>
import CodeBlock from "@/components/CodeBlock.vue";
import { cardCode, viewCode } from "@/codeBlocks/CardTemplate";
import RoutesButton from "@/components/RoutesButton.vue";
</script>
