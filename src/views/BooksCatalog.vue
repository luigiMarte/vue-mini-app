<template>
  <h2>{{ $t("books_cat") }}</h2>
  <RoutesButton
    :text="$t('view_expl')"
    route-name="pinnia-explanation"
    class="vertical-spacing-medium"
  />
  <div>
    <div v-if="loading">{{ $t("loading_books") }}</div>
    <div v-else-if="error">{{ error }}</div>
    <div v-else>
      <div class="card-container">
        <SimpleCard v-for="book in books" :key="book.id">
          <template #header>
            <h3 style="font-weight: bold">{{ book.title }}</h3>
          </template>
          <p>
            <span style="font-weight: bold">{{ $t("author") }}:</span>
            {{ book.author }}
          </p>
          <p>
            <span style="font-weight: bold">{{ $t("languages") }}:</span>
            {{ book.languages.join(", ") }}
          </p>
          <template #footer>
            <p :style="book.discount ? { color: 'blue' } : ''">
              {{ book.discount ? "5% Discount" : "" }}
            </p>
          </template>
        </SimpleCard>
      </div>
    </div>
    <hr />
    <h2>{{ $t("add_book") }}</h2>
    <FormKit
      type="form"
      id="booksForm"
      @submit="handleSubmit"
      #default="{ value }"
    >
      <FormKit
        type="text"
        name="title"
        id="title"
        validation="required"
        label="Title"
        help="Enter books title"
        placeholder="“Book's title”"
      />
      <FormKit
        type="text"
        name="author"
        id="author"
        validation="required"
        label="Author"
        help="Enter books author"
        placeholder="“Author of the book”"
      />
      <FormKit
        v-model="langs.value"
        type="checkbox"
        name="languages"
        label="Languages"
        :options="['English', 'Spanish', 'German', 'French']"
        decorator-icon="check"
        help="Available lenguages"
        validation="required|min:1"
      />
      <FormKit
        type="checkbox"
        label="5% Discount"
        help="Mark if book has discount"
        name="discount"
        :value="false"
        validation-visibility="dirty"
      />
      <!-- <pre wrap>{{ value }}</pre> -->
    </FormKit>
    <hr />
    <h2>{{ $t("remove_book") }}</h2>
    <FormKit
      type="form"
      id="deleteForm"
      @submit="deleteBook"
      #default="{ value }"
    >
      <FormKit
        type="number"
        name="remove"
        id="remove"
        validation="required"
        label="Remove book"
        help="Enter bookid to remove it"
        placeholder="“Id”"
    /></FormKit>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useBooksStore } from "@/stores/books/index";
import { storeToRefs } from "pinia";
import SimpleCard from "@/components/SimpleCard.vue";
import { reset } from "@formkit/core";
import RoutesButton from "@/components/RoutesButton.vue";

const booksStore = useBooksStore();
// Destructure reactive state
const { books, loading, error } = storeToRefs(booksStore);
const langs = ref([]);

const handleSubmit = (fields) => {
  console.log(fields);
  const payload = {
    title: fields.title,
    author: fields.author,
    languages: fields.languages,
    discount: fields.discount,
  };
  booksStore.addBook(payload);
  reset("booksForm");
};

const deleteBook = (id) => {
  console.log(id.remove);
  booksStore.removeBook(id.remove);
  reset("deleteForm");
};

onMounted(() => {
  booksStore.fetchBooks();
});
</script>

<style>
.card-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}
</style>
