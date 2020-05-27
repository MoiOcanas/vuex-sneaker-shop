<template>
  <div class="sneaker-container">
    <SneakerItem v-for="shoe in nikeSneakers" :shoe="shoe" :key="shoe.id"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import SneakerItem from '../components/SneakerItem'
export default {
  data() {
    return {
      highprice: 1300
    };
  },
  components: {
    SneakerItem
  },
  computed: {
   nikeSneakers() {
      return this.$store.getters.nike.filter(shoe => 
        this.$store.state.sale
          ? shoe.price < this.highprice && shoe.sale
          : shoe.price < this.highprice
      )
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../style/_variables.scss';
@import '../style/_mixins.scss';

  .sneaker-container {
    display: grid;
    grid-template-columns: auto auto auto auto;
  }

 @include mediaLg {
    .sneaker-container {
      grid-template-columns: repeat(3, auto);
    }
  }

  @include mediaMd {
    .sneaker-container {
      grid-template-columns: repeat(2, auto);
    }
  }

  @include mediaSm {
    .sneaker-container {
      grid-template-columns: auto;
    }
  }
</style>