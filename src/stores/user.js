import { defineStore } from "pinia";
import { auth, usersCollection } from "@/includes/firebase";

// First param is ID of the store
export default defineStore("user", {
  state: () => ({
    userLoggedIn: false,
  }),
  actions: {
    // Use actions when it changes the store/state
    async register(values) {
      await auth.createUserWithEmailAndPassword(values.email, values.password);

      await usersCollection.add({
        name: values.name,
        email: values.email,
        country: values.country,
      });

      // Update state
      this.userLoggedIn = true;
    },
  },
});
