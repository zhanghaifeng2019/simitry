<script lang="ts">
import AppVue from '@/App.vue';
import BuyButton from '@/components/atoms/BuyButton.vue';

import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    AppVue,
    BuyButton,
  },
})
export default class extends Vue {}
</script>

<template>
  <div>
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.button-box {
  position: relative;
  width: 100%;
  line-height: 0;

  .buy-button {
    position: absolute;
    width: 80%;
    bottom: 19%;
    left: 10%;
  }
}
</style>
