import { createRouter, createWebHistory } from "vue-router";
import MainLayout from "@/layouts/MainLayout.vue";
import HomeView from "@/views/HomeView.vue";
import SlotsXample from "@/views/SlotsXample.vue";
import AxiosXample from "@/views/AxiosXample.vue";
import CrudXample from "@/views/CrudXample.vue";
import FormkitForm from "@/views/FormkitForm.vue";
import BooksCatalog from "@/views/BooksCatalog.vue";
import SlotsExplanation from "@/views/explanations/SlotsExplanation.vue";
import AxiosExplanation from "@/views/explanations/AxiosExplanation.vue";
import FormkitExplanation from "@/views/explanations/FormkitExplanation.vue";
import PinniaExplanation from "@/views/explanations/PinniaExplanation.vue";

const routes = [
  {
    path: "/",
    component: MainLayout,
    children: [
      {
        path: "",
        name: "home",
        component: HomeView,
      },
      {
        path: "slots-example",
        name: "slots-example",
        component: SlotsXample,
      },
      {
        path: "/slots-example/explanation",
        name: "slots-explanation",
        component: SlotsExplanation,
      },
      {
        path: "axios-example",
        name: "axios-example",
        component: AxiosXample,
      },
      {
        path: "axios-example/explanation",
        name: "axios-explanation",
        component: AxiosExplanation,
      },
      {
        path: "crud-example",
        name: "crud-example",
        component: CrudXample,
      },
      {
        path: "form-example",
        name: "form-example",
        component: FormkitForm,
      },
      {
        path: "form-example/explanation",
        name: "form-explanation",
        component: FormkitExplanation,
      },
      {
        path: "catalog-example",
        name: "catalog-example",
        component: BooksCatalog,
      },
      {
        path: "pinnia-example/explanation",
        name: "pinnia-explanation",
        component: PinniaExplanation,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
