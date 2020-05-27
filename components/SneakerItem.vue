<template>
  <div class="item-card-container">
    <div class="item-card">
      <div class="image-container">
        <span class="salepill" v-if="shoe.sale">Sale</span>
        <img :src="shoe.img" :alt="shoe.name" />
      </div>
      <h3>{{ shoe.name }}</h3>
      <p>{{ shoe.brand }}</p>
      <h2>
        <b>${{ shoe.price }}</b>
      </h2>
      <p>{{ shoe.sold }} sold</p>
      <div class="item-card-button-container">
        <button @click="addItem" class="item-card-button">
            <i class="fa fa-plus" aria-hidden="true"></i>  Add to cart
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SneakerItem",
  props: {
    shoe: {
      type: Object,
      required: true
    }
  },
  methods: {
    addItem() {
        this.$store.commit("addItem", this.shoe);
    },
    removeItem() {
        this.$store.commit("removeItem", this.shoe);
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../style/_variables.scss';
@import '../style/_mixins.scss';

.item-card-container {
  padding: 0 0.5rem 0.5rem;

  .item-card {
    padding: 10px;
    background: #FAFAFA;
    width: 100%;
    border-radius: 0.5rem;
    margin: 0 auto;

    .image-container {
      position: relative;
      width: 100%;
      
      .salepill {
        background: rgb(232, 35, 25);
        color: white;
        font-family: 'Barlow', sans-serif;
        position: absolute;
        right: 10px;
        top: 10px;
        padding: 2px 10px 4px;
        text-transform: uppercase;
        font-size: 13px;
        font-weight: 700;
        border-radius: 1000px;
      }
    }

    img {
      width: 100%;
    }

    .item-card-button-container {
      text-align: center;

      .item-card-button {
        border: none;
        color: #FAFAFA;
        background: $third-color;
        width: 100%;
        padding: 0.3rem;
        margin: 0.5rem 0 0;
        border-radius: 0.5rem;
        cursor: pointer;
        font-size: 1.1rem;
        font-family: "Mukta", sans-serif;
      }

      .item-card-button:hover {
        background: #39a0bf;
      }
    }
  }
}
</style>