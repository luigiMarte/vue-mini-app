// apiMixin.js (Vue 2)
export const apiMixin = {
  data() {
    return {
      apiData: [],
      apiError: null,
    };
  },
  methods: {
    async fetchData(url) {
      try {
        const response = await fetch(url);
        this.apiData = await response.json();
      } catch (error) {
        this.apiError = error;
      }
    },
  },
};
