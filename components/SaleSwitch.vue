<template>
    <div class="center">
        <h3>Show just sales</h3>
        <input id="switchcheckbox" type="checkbox" class="hidden" v-model="trigger" @change="updateSale" />
        <label for="switchcheckbox" id="switch"></label>
    </div>
</template>

<script>
export default {
    name: 'SaleSwitch',
    props: {
        isInline: {
            type: Boolean,
            default: false
        },
    },
    data() {
        return {
          trigger: this.checked
        };
    },
     methods: {
      updateSale() {
        this.$store.commit('switchSale');
      }
    },
    computed: {
      checked() {
        return this.$store.state.sale;
      }
    },
}
</script>

<style lang="scss" scoped>
@import '../style/_variables.scss';
@import '../style/_mixins.scss';

.center {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;

  h3 {
      margin-bottom: 0.5rem;
  }

  .hidden {
    position: absolute !important;
    top: -9999px !important;
    left: -9999px !important;
  }

  #switch {
    background-color: grey;
    width: 70px;
    height: 30px;
    display: inline-block;
    border-radius: 200px;
    cursor: pointer;
    transition: background-color 0.5s;

    &::before {
      content: "";
      display: inline-block;
      width: 28px;
      height: 28px;
      background-color: white;
      border-radius: 50%;
      position: relative;
      left: 2px;
      transition: left 0.5s;
      top: 1px;
    }
  }

  #switchcheckbox:checked + label {
    background-color: $third-color;
  }

  #switchcheckbox:checked + label::before {
    left: 40px;
  }
}

@include mediaMd {
  .center {
    background-color: #fff;
    margin: 0;
  }
}

@include mediaSm {
  .center {
    background-color: #fff;
    margin: 0;
  }
}
</style>