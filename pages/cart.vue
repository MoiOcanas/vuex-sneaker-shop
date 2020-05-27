<template>
  <div class="cart">
    <div v-if="cartTotal > 0">
      <h1>Cart</h1>
      <div class="cart-checkout-item-container">
        <div class="cart-item-container">
          <div class="cart-item" v-for="shoe in cart" :key="shoe.id">
            <img :src="shoe.img" :alt="shoe.name" />
            <div class="cart-item-content">
              <h3>{{ shoe.name }}</h3>
              <small>{{ shoe.brand }}</small>
              <h4>{{ shoe.price }}</h4>
            </div>
          </div>
        </div>
        <div class="checkout-container">
          <button class="clean-button" @click="cleanCart">
            <i class="fa fa-refresh" aria-hidden="true"></i>
            Clean cart
          </button>
          <h2>Your total is: ${{ totalPrice }}</h2>
          <h3>Total items: {{ cartTotal }}</h3>
          <Checkout :total="cartTotal" />
        </div>
      </div>
    </div>
    <div v-else-if="cartTotal === 0 && success === false" class="empty">
      <h1>Cart</h1>
      <h2>Your cart is empty.</h2>
      <nuxt-link to="/">
        <button class="back-button">Fill er up!</button>
      </nuxt-link>
    </div>
    <div v-else>
      <h2>Success!</h2>
      <p>Your order has been processed, it will be delivered shortly.</p>
    </div>
  </div>
</template>

<script>
import Checkout from "../components/Checkout";
export default {
  components: {
    Checkout
  },
  data() {
    return {
      success: false
    };
  },
  methods: {
    cleanCart() {
      this.$store.commit("cleanCart");
      this.$store.commit("clearCartCount");
    }
  },
  computed: {
    cart() {
      return this.$store.state.cart;
    },
    cartTotal() {
      return this.$store.state.cartTotal;
    },
    totalPrice() {
      let total = [];

      Object.entries(this.cart).forEach(([key, shoe]) => {
        total.push(shoe.price);
      });

      return total.reduce((total, num) => {
        return total + num;
      }, 0);
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../style/_variables.scss';
@import '../style/_mixins.scss';

.cart {
  width: 90%;

  .empty {
    text-align: center;
  }

  .cart-checkout-item-container {
    display: grid;
    grid-template-columns: 65% 35%;

    .cart-item {
      padding: 10px;
      background: $primary-color;
      width: 100%;
      border-radius: 0.5rem;
      margin: 0.5rem 0;
      display: grid;
      grid-template-columns: 25% 75%;

      &:first-child {
        margin: 0 0 0.5rem;
      }

      img {
        width: 100%;
      }

      .cart-item-content {
        padding: 1rem;
      }
    }
  }

  .back-button {
    border: none;
    color: $primary-color;
    background: #ddb14e;
    width: 40%;
    text-transform: uppercase;
    padding: 0.2rem 0.3rem;
    margin: 1rem 0 0.5rem;
    border-radius: 0.5rem;
    cursor: pointer;
    font-size: 1.1rem;
    font-family: "Mukta", sans-serif;

    &:hover {
      background-color: #b89038;
    }
  }

  .checkout-container {
    text-align: center;
    background-color: $primary-color;
    margin: 0 auto;
    width: 90%;
    border-radius: 0.5rem;

    .clean-button {
      border: none;
      color: $primary-color;
      background: #ddb14e;
      width: 80%;
      text-transform: uppercase;
      padding: 0.2rem 0.3rem;
      margin: 1rem 0 0.5rem;
      border-radius: 0.5rem;
      cursor: pointer;
      font-size: 1.1rem;
      font-family: "Mukta", sans-serif;
      &:hover {
        background-color: #b89038;
      }
    }
  }
}

@include mediaMd {
    .cart {
        width: 100%;
    }
}

@include mediaSm {
    .cart {
      margin: 0 auto;

      .cart-checkout-item-container {
        grid-template-columns: auto;
        .cart-item {
          grid-template-columns: auto;
        }
      }
      .checkout-container{
          width: 100%;
      }
  }
}
</style>