<template>
  <div class="item-card-container">
    <div class="item-card">
      <img :src="shoe.img" :alt="shoe.name" />
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

<style scoped>
.item-card-container {
  padding: 0 0.5rem 0.5rem;
}

.item-card {
  padding: 10px;
  background: #FAFAFA;
  width: 100%;
  border-radius: 0.5rem;
  margin: 0 auto;
}

.item-card img {
  width: 100%;
}

.item-card-button-container {
  text-align: center;
}

.item-card-button {
  border: none;
  color: #FAFAFA;
  background: #4ebbdd;
  width: 100%;
  padding: 0.3rem;
  margin: 0.5rem 0 0;
  border-radius: 0.5rem;
  cursor: pointer;
  font-size: 1.1rem;
  font-family: "Mukta", sans-serif;
}

.item-card-button-remove {
  border: none;
  color: #FAFAFA;
  background: #DD4E4E;
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

.item-card-button-remove:hover {
  background: #C53B3B;
}
</style>