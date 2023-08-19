<template>
  <div class="search-bar">
    <input
      v-model="searchQuery"
      @input="handleInput"
      placeholder="Search..."
    />
    <button @click="search">Search</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: ''
    };
  },
  methods: {
    handleInput() {
      // Perform real-time filtering or validation here
    },
    search() {
      this.$emit('search', this.searchQuery);
    }
  }
};
</script>

<style scoped>
.search-bar {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

input {
  padding: 5px;
  border: 1px solid #ccc;
}

button {
  margin-left: 5px;
}
</style>
