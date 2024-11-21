<template>
  <h2>{{ $t("form_heroes") }}</h2>
  <RoutesButton :text="$t('view_expl')" route-name="form-explanation" />
  <p>{{ $t("form_intro") }}</p>
  <CustomAlert :type="alertType" v-model="showAlert" :text="alertMessage" />
  <FormKit
    type="form"
    id="heroesForm"
    @submit="handleSubmit"
    :plugins="[castRangeToNumber]"
    #default="{ value }"
  >
    <FormKit
      type="text"
      name="name"
      id="name"
      validation="required|not:Admin"
      label="Name"
      help="Enter your hero's full name"
      placeholder="“Iron Man”"
    />

    <FormKit
      type="select"
      label="Class"
      name="class"
      id="class"
      placeholder="Select a class"
      :options="['Warrior', 'Mage', 'Assassin']"
    />

    <FormKit
      type="range"
      name="skill"
      id="skill"
      validation="required|max:10"
      label="Skill"
      value="5"
      min="1"
      max="10"
      step="1"
      help="How many skill points should this character have?"
    />

    <!-- <pre wrap>{{ value }}</pre> -->
  </FormKit>
</template>

<script setup>
import { ref } from "vue";
import { createHero } from "@/api/endpoints/heroes/POST";
import { reset } from "@formkit/core";
import CustomAlert from "@/components/CustomAlert.vue";
import { ALERT_TYPES, ALERT_TEXT } from "@/constants/alertTypes";
import RoutesButton from "@/components/RoutesButton.vue";

const alertType = ref("");
const alertMessage = ref("");
const showAlert = ref(false);

const castRangeToNumber = (node) => {
  // We add a check to add the cast only to range inputs
  if (node.props.type !== "range") return;
  node.hook.input((value, next) => next(Number(value)));
};

const handleSubmit = async (fields) => {
  const result = await createHero(fields);

  if (result.success) {
    console.log(result.message);
    alertType.value = ALERT_TYPES.SUCCESS;
    alertMessage.value = ALERT_TEXT.SUCCESS;
    showAlert.value = true;
    reset("heroesForm");
  } else {
    alertType.value = ALERT_TYPES.ERROR;
    showAlert.value = true;
    alertMessage.value = ALERT_TEXT.ERROR;
    console.error(result.error);
  }
};
</script>
