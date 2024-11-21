import { defineStore } from "pinia";
import booksCatalog from "@/constants/booksCatalog";

export const useBooksStore = defineStore("books", {
  // arrow function recommended for full type inference
  state: () => ({
    books: [],
    loading: false,
    error: null,
  }),
  actions: {
    async fetchBooks() {
      this.loading = true;
      this.error = null;

      try {
        // Simulated API call with mock data
        const mockBooks = booksCatalog;
        this.books = mockBooks;
      } catch (error) {
        this.error = error.message;
      } finally {
        this.loading = false;
      }
    },
    addBook(book) {
      const id = this.books.length + 1;
      const addId = { id: id, ...book };
      this.books.push(addId);
    },

    removeBook(bookId) {
      const id = Number(bookId);
      this.books = this.books.filter((book) => book.id !== id);
    },
  },

  getters: {
    promotionBooks() {
      return this.books.filter((book) => book.discount);
    },
  },
});
