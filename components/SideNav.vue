<template>
    <div class="sidenav">
        <SaleSwitch />
        <hr>
        <div class="about-links">
          <div class="about-links-element"><nuxt-link to="/about">About this app</nuxt-link></div>
          <div class="about-links-element"><nuxt-link to="/about">Github</nuxt-link></div>
          <div class="about-links-element"><nuxt-link to="/about">My page</nuxt-link></div>
        </div>
        <p>Made with love by <a href="/">Moises Ocanas</a> 2020</p>
    </div>
</template>

<script>
import SaleSwitch from './SaleSwitch'
export default {
    name: 'Sidenav',
    components: {
      SaleSwitch
    }
}
</script>

<style lang="scss">
@import '../style/_variables.scss';
@import '../style/_mixins.scss';

.sidenav {
  width: 90%;
  height: 280px;
  margin: 0 auto;
  background: $primary-color;
  overflow-x: hidden;
  padding: 1rem;
  border-radius: 0.5rem;

  p {
    text-align: center;
    a {
      color: $secondary-color;
      text-decoration: none;
      &:hover {
          color: $third-color;
      }
    }
  }

  .about-links {
    display: flex;
    justify-content: space-between;
    width: 100%;

    .about-links-element {
      margin: 5px 0;

      a {
        text-decoration: none;
        color: $secondary-color;
        &:hover {
          color: $third-color;
        }
      }
    }
  }
}

@include mediaLg {
  .sidenav {
    height: 340px;
    p {
      margin-top: 0.5rem;
    }
    .about-links {
      flex-direction: column;
      .about-links-element {
        margin: 2px 0;
      }
    }
  }
}

@include mediaMd {
  .sidenav {
    width: 100%;
    background-color: #fff;
    height: auto;
    margin: 1rem 0;
    hr {
      display: none;
    }
    p {
      display: none;
    }
    
    .about-links {
      display: none;
    }
  }
}

@include mediaSm {
  .sidenav {
    width: 100%;
    background-color: #fff;
    height: auto;
    margin: 1rem 0;
    hr {
      display: none;
    }
    p {
      display: none;
    }
    
    .about-links {
      display: none;
    }
  }
}
</style>