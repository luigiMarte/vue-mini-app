<template>
  <div>
    <FormKit
      v-model="language"
      @change="changeLanguage"
      type="select"
      placeholder="Select language"
      name="lang-selector"
      :options="languageOptions"
      validation-visibility="dirty"
      :style="{
        border: '2px solid #451e99',
        color: '#451e99',
      }"
    />
  </div>
</template>

<script>
import { useI18n } from "vue-i18n";
import { computed, ref } from "vue";

export default {
  setup() {
    const { t, locale } = useI18n(); // Accedemos al objeto `locale`
    const language = ref(locale.value); // Usar `locale.value` como el idioma actual

    const languageOptions = computed(() => [
      { value: "en", label: t("english") },
      { value: "es", label: t("spanish") },
    ]);

    const changeLanguage = () => {
      locale.value = language.value; // Cambiar el idioma según el valor del selector
    };

    return {
      language,
      languageOptions,
      changeLanguage,
    };
  },
};
</script>

<style lang="css" scoped></style>
