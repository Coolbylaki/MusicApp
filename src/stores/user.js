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
      const userCred = await auth.createUserWithEmailAndPassword(
        values.email,
        values.password
      );

      await usersCollection.doc(userCred.user.uid).set({
        name: values.name,
        email: values.email,
        country: values.country,
      });

      await userCred.user.updateProfile({
        displayName: values.name,
      });

      // Update state
      this.userLoggedIn = true;
    },

    async authenticate(values) {
      await auth.signInWithEmailAndPassword(values.email, values.password);

      this.userLoggedIn = true;
    },
  },
});
