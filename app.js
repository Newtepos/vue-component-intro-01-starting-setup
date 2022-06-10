const app = Vue.createApp({});

app.component("user-context", {
  template: `<li>
  <h2>{{userData.name}}</h2>
  <button @click="toggleVisibility">Show Details</button>
  <ul v-if="componentVisibilty">
    <li><strong>Phone:</strong>{{ userData.phone }}</li>
    <li><strong>Email:</strong>{{ userData.email }}</li>
  </ul>
</li>`,
  data() {
    return {
      componentVisibilty: true,
      userData: {
        id: "Manuel",
        name: "Manuel Lorenz",
        phone: "01234 5678 991",
        email: "manuel@localhost.com",
      },
    };
  },
  methods: {
    toggleVisibility() {
      this.componentVisibilty = !this.componentVisibilty;
    },
  },
});
app.mount("#app");
