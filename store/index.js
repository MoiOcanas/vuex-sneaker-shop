import Vuex from "vuex"
import sneakers from '../sneakers'

const createStore = () => {
  return new Vuex.Store({
    state: {
      cartTotal: 0,
      cart: [],
      sale: false,
      sneakers: sneakers
    },
    getters: {
      nike: state => filter(state.sneakers, "brand", "Nike"),
      jordan: state => filter(state.sneakers, "brand", "Jordan"),
      adidas: state => filter(state.sneakers, "brand", "adidas"),
      yeezy: state => filter(state.sneakers, "brand", "Yeezy"),
      sale: state => filter(state.sneakers, "sale", true),
      allSneakers: state => state.sneakers
    },
    mutations: {
      switchSale: state => {
        state.sale = !state.sale
      },
      addItem(state, payload) {
        state.cartTotal += 1
        state.cart.push(payload)
      },
      removeItem(state, payload) {
        state.cartTotal -= 1
        const cartItemPostion = state.cart.indexOf(payload)
        state.cart.splice(cartItemPostion, 1)
      },
      clearCartCount(state) {
        state.cartTotal = 0
      },
      cleanCart(state) {
        state.cart = []
      }
    }
  })
}

export default createStore

const filter = (array, key, value) => array.filter(item => item[key] === value)
