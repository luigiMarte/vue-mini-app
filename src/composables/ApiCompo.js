// mouse.js
import { ref } from "vue";

// by convention, composable function names start with "use"
export function useApi() {
  // state encapsulated and managed by the composable
  const apiData = ref([]);
  const apiError = ref(null);

  // a composable can update its managed state over time.
  async function fetchData(url) {
    try {
      const response = await fetch(url);
      this.apiData = await response.json();
    } catch (error) {
      this.apiError = error;
    }
  }
}
