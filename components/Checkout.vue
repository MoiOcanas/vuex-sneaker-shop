<template>
    <div>
        <div v-if="!submitted" class="payment">
            <h3>Please enter your payment details:</h3>
            <label for="email">Email</label>
            <input id="email" class="input-email" type="email" v-model="stripeEmail" placeholder="name@example.com"/>
            <label for="card">Credit Card</label>
            <p>Test using this credit card: <span class="cc-number">4242 4242 4242 4242</span>, and enter any 5 digits for the zip code</p>
            <card 
                class='stripe-card'
                id="card"
                :class='{ complete }'
                stripe='pk_test_5ThYi0UvX3xwoNdgxxxTxxrG'
                @change='complete = $event.complete'
            />
            <button class="checkout-button" @click="pay" :disabled='!complete || !stripeEmail'>
                <i class="fa fa-credit-card" aria-hidden="true"></i>
                Pay
            </button>
        </div>
        <div v-else>
          <div v-if="status === 'failure'">
            <h3>Oh No!</h3>
            <p>Something went wrong!</p>
            <button @click="clearCart">Please try again</button>
          </div>

          <div v-else class="loadcontain">
            <h4>Please hold, we're filling up your cart with goodies</h4>
          </div>
        </div>
    </div>
</template>

<script>
import { Card, createToken } from 'vue-stripe-elements-plus';
import axios from 'axios';

export default {
    props: {
        total: {
            type: [Number, String],
            default: '50.00'
        },
        success: {
            type: Boolean,
            default: false
        }
    },
    components: {
        Card
    },
    data() {
        return {
            submitted: false,
            complete: false,
            status: '',
            response: '',
            stripeEmail: ''
        };
    },
    methods: {
        pay() {
          createToken().then(data => {
            this.submitted = true;
            console.log(data.token);
            axios
              .post(
                'https://sdras-stripe.azurewebsites.net/api/charge?code=zWwbn6LLqMxuyvwbWpTFXdRxFd7a27KCRCEseL7zEqbM9ijAgj1c1w==',
                {
                  stripeEmail: this.stripeEmail,
                  stripeToken: 'tok_visa',
                  stripeAmt: this.total
                },
                {
                  headers: {
                    'Content-Type': 'application/json'
                  }
                }
              )
              .then(response => {
                this.status = 'success';
                this.$emit('successSubmit');
                this.$store.commit('clearCartCount');

                this.response = JSON.stringify(response, null, 2);
                console.log(this.response);
              })
              .catch(error => {
                this.status = 'failure';
                this.response = 'Error: ' + JSON.stringify(error, null, 2);
                console.log(this.response);
              });
          });
      },
      clearCart() {
        this.submitted = false;
        this.status = '';
        this.complete = false;
        this.response = '';
      }
    }
}
</script>

<style lang="scss" scoped>
@import '../style/_variables.scss';
@import '../style/_mixins.scss';

.payment {
  color: $secondary-color;
  padding: 1rem;
  width: 90%;
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  label {
    margin: 15px 0 5px;
  }
  .stripe-card,
  .input-email {
    margin-bottom: 10px;
    border: none;
    background: #fff;
    padding: 0.3rem 1rem;
    font-size: 13px !important;
    border-radius: 0.5rem;
    font-family: "Mukta", sans-serif !important;
  }

  p {
    margin: 0 0 10px;
  }
  .checkout-button {
    border: none;
    color: $primary-color;
    background: #4edd63;
    width: 100%;
    text-transform: uppercase;
    padding: 0.5rem 0.3rem;
    margin-top: 0.5rem;
    border-radius: 0.5rem;
    cursor: pointer;
    font-size: 1.1rem;
    font-family: "Mukta", sans-serif;
    &:hover {
      background-color: #3abd4d;
    }
    &[disabled] {
      background-color: #9ba19c;
      cursor: default;
    }
  }
}
</style>