<template>
  <RoutesButton text="go back" goBack />
  <p>
    {{ $t("pinnia_exp_intro") }}
  </p>
  <h3>{{ $t("how_works") }}</h3>
  <p>
    {{ $t("pinnia_exp_structure") }}
  </p>
  <CodeBlock :code="storeStructure" />
  <p>
    {{ $t("pinnia_exp_pinnia") }}
  </p>
  <CodeBlock :code="getData" />
  <p>{{ $t("pinnia_exp_actions") }}</p>
  <CodeBlock :code="actionsMethods" />
  <p>{{ $t("pinnia_exp_getters") }}</p>
  <h3>{{ $t("how_component_works") }}</h3>
  <p>{{ $t("pinnia_exp_component") }}.</p>
</template>

<script setup>
import RoutesButton from "@/components/RoutesButton.vue";
import CodeBlock from "@/components/CodeBlock.vue";
import {
  storeStructure,
  getData,
  actionsMethods,
} from "@/codeBlocks/PinniaExp";
</script>
