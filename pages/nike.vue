<template>
  <div class="nike-container">
    <SideNav />
    <div class="sneaker-container">
      <SneakerItem v-for="shoe in nikeSneakers" :shoe="shoe" :key="shoe.id"/>
    </div>
  </div>
</template>

<script>

import SneakerItem from '../components/SneakerItem'
import SideNav from '../components/SideNav'
export default {
  data() {
    return {
      highprice: 1300
    };
  },
  components: {
    SneakerItem,
    SideNav
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

  .nike-container {
    display: grid;
    grid-template-columns: 20% 80%;
    .sneaker-container {
      display: grid;
      grid-template-columns: repeat(4, auto);
    }
  }

 @include mediaLg {
    .nike-container {
      grid-template-columns: 20% 80%;
      .sneaker-container {
        grid-template-columns: repeat(3, auto);
      }
    }
  }

  @include mediaMd {
    .nike-container {
      grid-template-columns: auto;
      .sneaker-container {
        grid-template-columns: repeat(2, auto);
      }
    }
  }

  @include mediaSm {
     .nike-container {
      grid-template-columns: auto;
      .sneaker-container {
        grid-template-columns: auto;
      }
    }
  }
</style>