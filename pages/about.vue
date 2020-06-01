<template>
    <div class="about-page-container">
        <h1>About this App</h1>
        <p>
           This app is an emulation of an online sneakers store. It works with different plugins and elements (dynamic and static). It is not an original idea, it is my own version of something that can already be found on the net. 
           It was made using the following tools:
        </p>
        <div class="brand-img-container">
            <a href="https://vuejs.org/" target="_blank"><img class="brand-img" src="vue.png" alt="vue"></a>
            <a href="https://nuxtjs.org/" target="_blank"><img class="brand-img" src="nuxt.png" alt="nuxt"></a>
            <a href="https://stripe.com/" target="_blank"><img class="brand-img" src="stripe.png" alt="stripe"></a>
            <a href="https://sass-lang.com/" target="_blank"><img class="brand-img" src="sass-logo.png" alt="sass"></a>
        </div>
        <h1>About me</h1>
        <div class="about-me">
            <img class="about-me-img" src="me.PNG" alt="me">
            <p>
                For around 3 years I've worked using different technologies as frontend developer, sometimes as full stack. I love my family, my friends, my dog and this great profession.
                I really like learning about new web development technologies, mainly javascript. I love to do demos and exercises to improve my skills. I am also interested in improving and learning about PHP, Laravel and Python. 
                I like coffee, cake, exercising and having fun with my friends if the weather allows it.
                My goal for the next 5 years is to become a great member of a professional development team and participate in creating something very useful for everyone.
            </p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '../style/_variables.scss';
@import '../style/_mixins.scss';

.about-page-container {
  width: 70%;
  margin: 0 auto;
  h1 {
    text-align: center;
    font-size: 40px;
  }
  .brand-img-container {
    display: grid;
    grid-template-columns: repeat(4, auto);
    margin-top: 1rem;
    .brand-img {
      width: 90%;
      margin: 0 auto;
    }
  }
  .about-me {
    display: grid;
    grid-template-columns: 20% 80%;
    .about-me-img {
      width: 90%;
      margin: 0 auto;
      border-radius: 50%;
    }
    p {
      width: 90%;
      display: flex;
      justify-self: center;
      align-items: center;
    }
  }
}

@include mediaLg {
  .jordan-container {
    grid-template-columns: 20% 80%;
    .sneaker-container {
      grid-template-columns: repeat(3, auto);
    }
  }
}

@include mediaMd {
  a {
    text-align: center;
  }
  .about-page-container {
    width: 90%;
    .brand-img-container {
      grid-template-columns: repeat(2, auto);
      .brand-img {
        width: 60%;
      }
    }
    .about-me {
      grid-template-columns: auto;
      .about-me-img {
        width: 30%;
        margin: 0 auto;
        border-radius: 50%;
        padding: 0.5rem 0 1rem;
      }
    }
  }
}

@include mediaSm {
  a {
    text-align: center;
  }
  .about-page-container {
    width: 90%;
    .brand-img-container {
      grid-template-columns: auto;
      .brand-img {
        width: 60%;
      }
    }
    .about-me {
      grid-template-columns: auto;
      .about-me-img {
        width: 70%;
        margin: 0 auto;
        border-radius: 50%;
        padding: 0.5rem 0 1rem;
      }
    }
  }
}
</style>