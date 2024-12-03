// src/stores/expense.js
import { defineStore } from "pinia";
import { api } from "boot/axios";

export const useExpenseStore = defineStore("expense", {
  state: () => ({
    loading: false,
    error: null,
    results: [],
  }),

  actions: {
    async fetchAlternatives(formData) {
      this.loading = true;
      this.error = null;

      try {
        const { data } = await api.post(
          "https://your-project.supabase.co/functions/v1/alternatives",
          formData,
          {
            headers: {
              Authorization: `Bearer ${process.env.SUPABASE_ANON_KEY}`,
            },
          }
        );

        if (!data.success) {
          throw new Error(data.error);
        }

        this.results = data.data;
        return data.data;
      } catch (error) {
        this.error = error.message;
        throw error;
      } finally {
        this.loading = false;
      }
    },
  },
});
