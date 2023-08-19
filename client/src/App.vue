<template>
  <div id="app">
    <search-bar @search="performSearch"></search-bar>
    <search-results :results="searchResults"></search-results>
  </div>
</template>

<script>
import { ref } from 'vue';
import SearchBar from './components/SearchBar.vue';
import SearchResults from './components/SearchResults.vue';

export default {
  components: {
    SearchBar,
    SearchResults
  },
  setup() {
    const searchResults = ref([]);

//    function performSearch(query) {
  function performSearch() {
      // Simulate search results (replace with actual search logic)
      searchResults.value = ['Result 1', 'Result 2', 'Result 3'];
    }

    return {
      searchResults,
      performSearch
    };
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
