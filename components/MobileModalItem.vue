<template>
  <div class="item-card-container">
    <div class="item-card">
      <img :src="shoe.img" :alt="shoe.name" />
      <h3>{{ shoe.name }}</h3>
      <h2>
        <b>${{ shoe.price }}</b>
      </h2>
      <div class="item-card-button-remove-container">
          <button @click="removeItem" class="item-card-button-remove">
            <i class="fa fa-times" aria-hidden="true"></i> Remove
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'MobileModalItem',
      props: {
        shoe: {
            type: Object,
            required: true
         }
    },
    methods: {
        removeItem() {
            this.$store.commit("removeItem", this.shoe);
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../style/_variables.scss';
@import '../style/_mixins.scss';

.item-card-container {

  .item-card {
    padding: 10px;
    background: $primary-color;
    width: 100%;
    border-radius: 0.5rem;
    margin: 0 auto;

    img {
      width: 100%;
    }

    .item-card-button-remove-container {
      text-align: center;

      .item-card-button-remove {
        border: none;
        color: $primary-color;
        background: #dd4e4e;
        width: 50%;
        padding: 0.3rem;
        margin: 0.5rem 0 0.5rem;
        border-radius: 0.5rem;
        cursor: pointer;
        font-size: 1.1rem;
        font-family: "Mukta", sans-serif;

        &:hover {
          background: #c53b3b;
        }
      }
    }
  }
}
</style>