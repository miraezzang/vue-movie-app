<template>
  <div class="container">
    <div 
      :class="{ 'no-result': !movies.length }"
      class="inner">
      <Loader v-if="loading" />
      <div 
        v-if="message"
        class="message">
        {{ message }}
      </div>
      <div 
        v-else
        class="movies">
        <MovieItem 
        v-for="realdata in movies"
        :key="realdata.imdbID" 
        :movie="realdata"/>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, storeKey } from 'vuex'
import MovieItem from './MovieItem'
import Loader from './Loader'

export default {
  components: {
    MovieItem,
    Loader
  },
  computed: {
    ...mapState('movie', [
      'movies',
      'message',
      'loading'
    ])
  }
}
</script>

<style lang="scss" scoped>
@import "../scss/main.scss";
.container {
  margin-top: 30px;
  .inner {
    background-color: $gray-200;
    padding: 10px;
    border-radius: 4px;
    text-align: center;
    &.no-result {
      padding: 70px;
    }
  }
  .message {
    color: $gray-400;
    font-size: 20px;
  }
  .movies {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>