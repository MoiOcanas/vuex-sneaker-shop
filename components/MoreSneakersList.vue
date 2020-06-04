<template>
    <div>
        <div class="sneaker-container">
          <SneakerItem v-for="shoe in sneakersBrandList.slice(0, 4)" :shoe="shoe" :key="shoe.id"/>
        </div>
    </div>
</template>

<script>
import SneakerItem from './SneakerItem'
export default {
    components: {
        SneakerItem
    },
    data() {
        return {
            sneakersBrandList: []
        }
    },
    props: {
        brand: {
            type: String,
            required: true
        }
    },
    created() {
        this.getSneakersBrand(this.brand);
    },
    methods: {
        getSneakersBrand(brand) {
            switch (brand) {
                case 'Jordan':
                    this.sneakersBrandList = this.$store.getters.jordan;
                    break;
                case 'adidas':
                    this.sneakersBrandList = this.$store.getters.adidas;
                    break;
                case 'Nike':
                    this.sneakersBrandList = this.$store.getters.nike;
                    break;
                case 'Yeezy':
                    this.sneakersBrandList = this.$store.getters.yeezy;
                    break;
                default:
                    console.log('No brand');
            }
        }
    },
}
</script>

<style lang="scss" scoped>
@import '../style/_variables.scss';
@import '../style/_mixins.scss';

    .sneaker-container {
      display: grid;
      grid-template-columns: repeat(4, auto);
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