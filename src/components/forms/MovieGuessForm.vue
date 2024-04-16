<template>
  <div class="guess-form">
    <div class="close-button" @click="closeForm">✖️</div> <!-- Stylish X as close button -->
    <img :src="item.image" alt="Backdrop" class="backdrop">
    <form @submit.prevent="submitGuess">
      <input type="text" v-model="guess" placeholder="Guess the title">
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      guess: ''
    };
  },
  methods: {
    submitGuess() {
      this.$emit('guess-made', { id: this.item.id, guess: this.guess });
      this.guess = ''; // Reset guess input
    },
    closeForm() {
      this.$emit('close-form'); // Emit an event to signal form should be closed
    }
  }
};
</script>

<style scoped>
.backdrop {
  width: 100%;
  opacity: 0.8;
}
.guess-form {
  position: relative;
}
.close-button {
  position: absolute;
  top: 5px;
  right: 10px;
  cursor: pointer;
  font-size: 20px;
  z-index: 1000;
  padding: 5px;
}
</style>
