<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
@Component({
  components: {},
})
export default class extends Vue {
  private bButton = false;

  private onClicked() {
    this.bButton = true;
  }
}
</script>

<template>
  <div>
    <img @click="onClicked" class="img" src="@/assets/images/sp/button/buy-button.png" />
  </div>
</template>

<style lang="scss" scoped>
.img {
  display: block;
  width: 100%;
}
</style>
