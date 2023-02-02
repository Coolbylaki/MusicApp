import { defineStore } from "pinia";

// First param is ID of the store
export default defineStore("user", {
  state: () => ({
    userLoggedIn: false,
  }),
});
