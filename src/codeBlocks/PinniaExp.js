export const storeStructure = `<script>
import { defineStore } from "pinia";
export const useBooksStore = defineStore("books", {
  state: () => ({
    books: [],
    // Other vars
  }),
  actions: {
   // Actions methods ....
  },

  getters: {
   // Getters methods...
  },
});
</script>
`;

export const getData = `<script>
import booksCatalog from "@/constants/booksCatalog";
// then in Actions
  actions: {
    async fetchBooks() {
      this.loading = true;
      this.error = null;

      try {
        // Simulated API call with mock data
        const mockBooks = booksCatalog;
        // Save books data in State
        this.books = mockBooks;
      } catch (error) {
        this.error = error.message
        }....
  },
};
</script>
`;

export const actionsMethods = `<script>
// Inside Actions
  addBook(book) {
      const id = this.books.length + 1;
      const addId = { id: id, ...book };
      this.books.push(addId);
    },

removeBook(bookId) {
    const id = Number(bookId);
    this.books = this.books.filter((book) => book.id !== id);
},
</script>
`;
