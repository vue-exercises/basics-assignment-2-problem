const app = Vue.createApp({
  data() {
    return {
      userInput: "",
      userInput2: "",
    }
  },
  methods: {
    showAlert() {
      alert("Yessss! You did it!")
    },
    saveUserInput() {
      this.userInput = event.target.value
    },
    saveUserInput2() {
      this.userInput2 = event.target.value
    },
  },
})

app.mount("#assignment")
