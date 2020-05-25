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
.item-card-container {
  .item-card {
    padding: 10px;
    background: #FAFAFA;
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
            color: #FAFAFA;
            background: #DD4E4E;
            width: 50%;
            padding: 0.3rem;
            margin: 0.5rem 0 0;
            border-radius: 0.5rem;
            cursor: pointer;
            font-size: 1.1rem;
            font-family: "Mukta", sans-serif;

            &:hover {
                background: #C53B3B;
            }
        }
    }
  }
}
</style>