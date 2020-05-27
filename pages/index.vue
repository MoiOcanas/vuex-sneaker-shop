<template>
  <div class="index-container">
    <div class="main-jumbotron">
      
    </div>
    <SneakersList />
  </div>
</template>

<script>
import SneakersList from '../components/SneakersList'
export default {
  components: {
    SneakersList
  }
}
</script>

<style scoped>
  .index-container {
    width: 100%;
  }
</style>

