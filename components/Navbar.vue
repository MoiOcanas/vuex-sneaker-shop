<template>
    <div class="nav-wrapper">
        <nav class="navbar">
            <nuxt-link id="app-brand" to="/">
                <span>SHOE APP</span>
            </nuxt-link>
            <div :class="buttonDisplayed ? 'menu-toggle is-active' : 'menu-toggle'"  @click="handleClick" id="mobile-menu">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
            <ul :class="expanded ? 'nav mobile-nav no-search' : 'nav no-search'">
                <li class="nav-item" @click="handleClick" id="home-nav-item"><nuxt-link to="/">Home</nuxt-link></li>
                <li class="nav-item" @click="handleClick"><nuxt-link to="/jordan">Jordan</nuxt-link></li>
                <li class="nav-item" @click="handleClick"><nuxt-link to="/nike">Nike</nuxt-link></li>
                <li class="nav-item" @click="handleClick"><nuxt-link to="/adidas">Adidas</nuxt-link></li>
                <li class="nav-item" @click="handleClick"><nuxt-link to="/yeezy">Yeezy</nuxt-link></li>
                <li class="nav-item" id="my-site" @click="handleClick"><a target="_blank" href="https://moiocanas.github.io/portfolio/">My site</a></li>
                <li class="nav-item" id="my-github" @click="handleClick"><a target="_blank" href="https://github.com/MoiOcanas">Github</a></li>
                <li class="nav-item" id="about-app" @click="handleClick"><nuxt-link to="/about">About this app</nuxt-link></li>
                <li class="nav-item" @click="handleClick" id="cart-nav-item">
                  <div v-if="cartTotal > 0" class="cartcount">{{ cartTotal }}</div>
                  <nuxt-link to="/cart">
                    <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                    Cart
                  </nuxt-link>
                </li>
            </ul>
        </nav>
		<MobileModal :cartTotal="cartTotal" />
    </div>
</template>

<script>
import MobileModal from './MobileModal';
export default {
  name: "Navbar",
  components: {
	  MobileModal
  },
  data() {
    return {
      expanded: false,
      buttonDisplayed: false,
    }
  },
  methods: {
    handleClick() {
      this.expanded = !this.expanded;
      this.buttonDisplayed = !this.buttonDisplayed;
    },
    show () {
      this.$modal.show('cart');
    },
  },
  computed: {
    cartTotal() {
      return this.$store.state.cartTotal;
	},
	cart() {
      return this.$store.state.cart;
    },
  }
};
</script>

<style lang="scss" scoped>
@import '../style/_variables.scss';
@import '../style/_mixins.scss';

#home-nav-item {
  display: none;
}

#my-site {
  display: none;
}

#my-github {
  display: none;
}

#about-app {
  display: none;
}

.nav-wrapper {
  width: 100%;
  position: -webkit-sticky;
  position: sticky;
  z-index: 2456;
  top: 0;
  background-color: $primary-color;

  .my-float {
    margin-top: 22px;
  }
}

.navbar {
  display: grid;
  grid-template-columns: 1fr 3fr;
  align-items: center;
  overflow: hidden;
  padding: 1.5rem 0.8rem;

  #app-brand {
    text-decoration: none;
    font-family: 'Bebas Neue', cursive;
    font-size: 1.5rem;
    margin-left: 10px;
  }

  a {
    color: $secondary-color;
    font-size: 1.3rem;
    font-weight: bold;
    i {
      margin-left: 10px;
    }

    &:hover {
      text-decoration: none;
    }
  }

  img {
    height: 16px;
    width: auto;
    justify-self: flex-start;
    margin-left: 20px;
  }

  ul {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    justify-self: end;
    text-align: center;

    .cartcount {
      position: absolute;
      background: #ff2211;
      color: white;
      text-align: center;
      padding-top: 2px;
      width: 20px;
      height: 20px;
      font-size: 10px;
      margin: -5px 0px;
      border-radius: 1000px;
      font-weight: 700;
    }
  }

  .nav-item a {
    color: $secondary-color;
    font-size: 1.1rem;
    font-weight: 400;
    padding: 0px 10px;
    text-decoration: none;
    transition: color 0.3s ease-out;

    &:hover {
      background-color: #eaeaea;
    }
  }
}

.search {
  transform: translate(-35%);
  -webkit-transform: translate(-35%);
  transition: transform 0.7s ease-in-out;
  color: $third-color;
}

.no-search {
  transform: translate(0);
  transition: transform 0.7s ease-in-out;
}

.menu-toggle {
  justify-self: flex-end;
  margin-right: 25px;
  display: none;

  &:hover {
    cursor: pointer;
  }

  .bar {
    width: 25px;
    height: 3px;
    background-color: $secondary-color;
    margin: 5px auto;
    -webkit-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    display: block;
  }
}

#mobile-menu.is-active .bar:nth-child(2) {
  opacity: 0;
}

#mobile-menu.is-active .bar:nth-child(1) {
  -webkit-transform: $translate-1;
  -ms-transform: $translate-1;
  -o-transform: $translate-1;
  transform: $translate-1;
}

#mobile-menu.is-active .bar:nth-child(3) {
  -webkit-transform: $translate-2;
  -ms-transform: $translate-2;
  -o-transform: $translate-2;
  transform: $translate-2;
}

@include mediaSm {
  .features {
    flex-direction: column;
    padding: 50px;
  }
  
  #home-nav-item {
    display: block;
  }

  #about-app {
    display: block;
  }

  #my-site {
    display: block;
  }

  #my-github {
    display: block;
  }

  .navbar {
    a {
      i {
        font-size: 1.3em;
      }
    }
    ul {
      display: flex;
      flex-direction: column;
      position: fixed;
      justify-content: flex-start;
      top: 55px;
      left: 0px;
      padding: 0;
      opacity: 0.9;
      background-color: $primary-color;
      width: 100%;
      height: calc(100vh - 55px);
      transform: translate(-101%);
      text-align: center;
      overflow: hidden;

      #cart-nav-item {
        display: none;
      }

      li {
        padding: 15px;
        &:first-child {
          margin-top: 20px;
        }

        a {
          font-size: 1.5rem;
        }
      }
    }
  }

  .menu-toggle,
  .bar {
    display: block;
    cursor: pointer;
  }

  .mobile-nav {
    transform: translate(0%) !important;
  }

  #search-icon {
    display: none;
  }

  .search-input {
    display: none;
  }
}
</style>