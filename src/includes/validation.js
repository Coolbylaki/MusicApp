import { Form as VeeForm, Field as VeeField } from "vee-validate";

export default {
  install(app) {
    app.component("VeeForm", VeeForm);
    app.component("VeeField", VeeField);
  },
};
// It can accept options as second argument also, which allow other developers to configure it.
