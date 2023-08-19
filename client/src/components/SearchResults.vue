<template>
  <div class="search-results">
    <ul>
      <li v-for="(result, index) in results" :key="index">{{ result }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    results: Array
  }
};
</script>

<style scoped>
.search-results {
  margin-top: 10px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin-bottom: 5px;
  padding: 5px;
  border: 1px solid #ccc;
  background-color: #f9f9f9;
}
</style>
