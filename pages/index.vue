<template>
  <div class="index-container">
    <div class="main-banner">
      <div class="main-text">
        <h1>adidas shoes on sales!</h1>
        <nuxt-link class="go-to-button" to="/adidas">Go to adidas</nuxt-link>
      </div>
      <img src="shoe-main-banner.jpg" alt="main-banner">
    </div>
    <SneakersList />
  </div>
</template>

<script>
import SneakersList from '../components/SneakersList'

export default {
  components: {
    SneakersList,
  }
}
</script>

<style lang="scss" scoped>
@import '../style/_variables.scss';
@import '../style/_mixins.scss';

.index-container {
  width: 100%;
  .main-banner {
    position: relative;
    margin-bottom: 1rem;
    .main-text {
      position: absolute;
      top: 40%;
      left: 30px;
      color: $primary-color;
      .go-to-button {
        border: none;
        color: #fafafa;
        background: $third-color;
        width: 100%;
        padding: 0.3rem 3rem;
        text-decoration: none;
        margin: 0.5rem 0 0;
        border-radius: 0.5rem;
        cursor: pointer;
        font-size: 1.1rem;
        font-family: "Mukta", sans-serif;
      }

      .go-to-button:hover {
        background: #39a0bf;
      }
      h1 {
        text-transform: uppercase;
        font-size: 45px;
      }
    }
    img {
      width: 100%;
    }
  }
}

@include mediaLg {
  .index-container {
    .main-banner {
      .main-text {
        h1 {
          font-size: 33px;
        }
      }
    }
  }
}

@include mediaMd {
  .index-container {
    .main-banner {
      .main-text {
        h1 {
          font-size: 30px;
        }
      }
    }
  }
}

@include mediaSm {
  .sidenav {
    display: none;
  }
  
  .index-container {
    .main-banner {
      .main-text {
        .go-to-button {
          padding: 0.2rem 2rem;
          font-size: 0.8rem;
        }
        h1 {
          font-size: 17px;
        }
      }
    }
  }
}

</style>

