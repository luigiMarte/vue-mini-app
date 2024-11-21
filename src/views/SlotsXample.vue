<template>
  <div>
    <h2>{{ $t("example_slots") }}</h2>
    <RoutesButton :text="$t('view_expl')" route-name="slots-explanation" />
    <p class="vertical-spacing-medium">
      {{ $t("example_slots_firstP") }}
    </p>
    <SimpleCard class="vertical-spacing-medium">
      <template #header>
        <span>{{ $t("card_title") }}</span>
      </template>
      <!-- This is main content -->
      <p>{{ $t("content_from_parent") }}</p>
      <!-- In footer we use default content -->
      <template #footer></template>
    </SimpleCard>
  </div>
</template>

<script setup>
import SimpleCard from "@/components/SimpleCard.vue";
import RoutesButton from "@/components/RoutesButton.vue";
</script>

<style lang="scss" scoped></style>
