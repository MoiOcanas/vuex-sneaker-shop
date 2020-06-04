<template>
<div>
    <div class="sneaker-details-container">
        <zoom-on-hover :img-normal="sneaker.img"></zoom-on-hover>
        <div class="sneaker-details">
            <h1>{{ sneaker.name }}</h1>
            <h3>${{ sneaker.price }}</h3>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae sed facilis voluptate quaerat ducimus cum perferendis? Natus sequi earum autem eveniet harum. Id assumenda ipsam nulla quidem modi at veniam!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime praesentium magni pariatur odit amet non accusamus magnam minima? Ab eveniet natus temporibus quaerat laudantium minus nihil, fuga eaque blanditiis totam.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            </p>
            <div class="sneaker-details-button-container">
                <button @click="addItem" class="sneaker-details-button">
                    <i class="fa fa-plus" aria-hidden="true"></i>  Add to cart
                </button>
                <nuxt-link v-if="cartTotal > 0" class="sneaker-details-button-checkout" to="/cart">
                     Go to checkout
                </nuxt-link>
            </div>
        </div>

    </div>
      <div class="more-items-container">
        <h1>More brand shoes</h1>
        <MoreSneakersList :brand="sneaker.brand" />
      </div>
    </div>
</template>

<script>
import MoreSneakersList from '../components/MoreSneakersList'
export default {
    components: {
        MoreSneakersList
    },
    computed: {
        sneaker() {
            //O o i - springs coming
            return this.$store.getters.getSneaker(+this.$route.params.id)
        },
        cartTotal() {
            return this.$store.state.cartTotal;
        },
    },
    methods: {
    addItem() {
        this.$store.commit("addItem", this.sneaker);
    },
    removeItem() {
        this.$store.commit("removeItem", this.sneaker);
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../style/_variables.scss';
@import '../style/_mixins.scss';

.more-items-container {
  margin-top: 1rem;
  h1 {
    margin-left: 12px;
    margin-bottom: 15px;
  }
}

.modal-img {
  width: 100%;
  height: auto;
}

.close-icon {
  color: $secondary-color;
  position: absolute;
  top: 15px;
  right: 10px;
  .bar {
    width: 25px;
    height: 3px;
    background-color: $secondary-color;
    margin: 5px auto;
    -webkit-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    display: block;
    &:hover {
      cursor: pointer;
    }
    &:nth-child(1) {
      -webkit-transform: $translate-3;
      -ms-transform: $translate-3;
      -o-transform: $translate-3;
      transform: $translate-3;
    }

    &:nth-child(2) {
      -webkit-transform: $translate-2;
      -ms-transform: $translate-2;
      -o-transform: $translate-2;
      transform: $translate-2;
    }
  }
}

.sneaker-details-container {
  display: grid;
  grid-template-columns: 50% 50%;

  .sneaker-details-img {
    padding: 20px 30px;
    width: 100%;
    &:hover {
      cursor: pointer;
    }
  }

  .sneaker-details {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .sneaker-details-button-container {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin-top: 1rem;

    .sneaker-details-button {
      border: none;
      color: #fafafa;
      background: $third-color;
      width: 50%;
      padding: 0.3rem;
      margin: 0.5rem;
      border-radius: 0.5rem;
      cursor: pointer;
      font-size: 1.1rem;
      font-family: "Mukta", sans-serif;
      &:hover {
        background: #39a0bf;
      }
    }

    .sneaker-details-button-checkout {
      border: none;
      color: #fafafa;
      background: #4edd63;
      text-align: center;
      text-decoration: none;
      width: 50%;
      padding: 0.3rem;
      margin: 0.5rem;
      border-radius: 0.5rem;
      cursor: pointer;
      font-size: 1.1rem;
      font-family: "Mukta", sans-serif;
      &:hover {
        background: #3abd4d;
      }
    }
  }
}

@include mediaMd {
  .sneaker-details-container {
    grid-template-columns: auto;
  }
}
@include mediaSm {
  .sneaker-details-container {
    grid-template-columns: auto;
  }
}
</style>