<template>
    <div class="mobile-modal">
        <button v-if="cartTotal > 0" @click="show" class="float">
          <div v-if="cartTotal > 0" class="mobile-cartcount">{{ cartTotal }}</div>
          <i class="fa fa-shopping-cart" aria-hidden="true"></i>
          Cart
        </button>

        <modal 
		 width="'90%'"
         height="auto"
         :scrollable="true"
		 name="cart">
            <div @click="hide" class="close-icon">
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
            <div v-if="cartTotal > 0">
                <h2>Your total is: ${{ totalPrice }}</h2>
                <div class="clean-button-container">
                    <button class="clean-button" @click="cleanCart" v-if="cartTotal > 1">
                        <i class="fa fa-refresh" aria-hidden="true"></i>
                        Clean cart
                    </button>
                </div>
                <MobileModalItem v-for="shoe in cart" :shoe="shoe" :key="shoe.id"/>
                <div class="go-to-checkout-container">
                    <span @click="hide">
                        <nuxt-link to="/cart" class="go-to-checkout-button">
                            Go to checkout
                        </nuxt-link>
                    </span>
                </div>
            </div>
            <div v-else>
                <h2>Your cart is empty</h2>
            </div>
        </modal>
    </div>
</template>

<script>
import MobileModalItem from './MobileModalItem';
export default {
    name: 'MobileNavbar',
    components: {
        MobileModalItem
    },
    props: {
        cartTotal: {
            type: Number
        }
    },
    data() {
        return {

        }
    },
    methods: {
        show () {
            this.$modal.show('cart');
        },
        hide () {
            this.$modal.hide('cart');
        },
        cleanCart() {
            this.$store.commit("cleanCart");
            this.$store.commit("clearCartCount");
        }
    },
    computed: {
        cart() {
          return this.$store.state.cart;
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
}
</script>

<style lang="scss" scoped>
@import '../style/_variables.scss';
@import '../style/_mixins.scss';

.mobile-modal {
  .float {
    display: none;
  }

  h2 {
    text-align: center;
    padding: 1rem;
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

  .clean-button-container {
    text-align: center;
    .clean-button,
    .back-button {
      border: none;
      color: $primary-color;
      background: #ddb14e;
      width: 80%;
      text-transform: uppercase;
      padding: 0.2rem 0.3rem;
      margin: 0.5rem;
      border-radius: 0.5rem;
      cursor: pointer;
      font-size: 1.1rem;
      font-family: "Mukta", sans-serif;

      &:hover {
        background-color: #b89038;
      }
    }
  }

  .go-to-checkout-container {
    text-align: center;
    margin: 1.5rem 0.5rem;
    .go-to-checkout-button {
      border: none;
      color: #fafafa;
      background: #4edd63;
      width: 100%;
      text-decoration: none;
      padding: 0.3rem 2.5rem;
      border-radius: 0.5rem;
      cursor: pointer;
      font-size: 1.1rem;
      font-family: "Mukta", sans-serif;

      &hover {
        background-color: #3abd4d;
      }
    }
  }
}

@include mediaSm {
  .mobile-modal {
    h3 {
      text-align: center;
      margin-top: 1rem;
    }
    .float {
      display: block;
      position: fixed;
      bottom: 40px;
      right: 40px;
      padding: 0.6rem 1.3rem;
      background-color: $primary-color;
      color: $secondary-color;
      border-radius: 1.5rem;
      text-align: center;
      font-size: 1.1rem;
      box-shadow: 2px 2px 3px #999;
      text-decoration: none;
      border: none;

      &:hover {
        cursor: pointer;
      }

      &:checked {
        box-shadow: none;
      }

      .mobile-cartcount {
        position: absolute;
        background: #ff2211;
        color: white;
        text-align: center;
        padding-top: 5px;
        width: 20px;
        height: 20px;
        font-size: 10px;
        margin: -10px 0px 0px -25px;
        border-radius: 1000px;
        font-weight: 700;
      }
    }
  }
}

</style>