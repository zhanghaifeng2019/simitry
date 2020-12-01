<script lang="ts">
import AImage from '@/components/atoms/Image.vue';
import PcButton01 from '@/components/atoms/unixbutton/PcButton01.vue';
import PcButton02 from '@/components/atoms/unixbutton/PcButton02.vue';
import PcButton03 from '@/components/atoms/unixbutton/PcButton03.vue';
import PcButton04 from '@/components/atoms/unixbutton/PcButton04.vue';
import { Component, Vue } from 'vue-property-decorator';
@Component({
  components: {
    PcButton01,
    PcButton02,
    PcButton03,
    PcButton04,
    AImage,
  },
})
export default class extends Vue {}
</script>

<template>
  <div class="offer">
    <div class="button-1">
      <a-image :src="require('@/assets/images/pc/pc-offer/picture-02.png')" alt="SimiTRY" />
      <pc-button-01 class="button-possition1" href="#form" />
    </div>
    <div class="button-2">
      <a-image :src="require('@/assets/images/pc/pc-offer/picture-03.png')" alt="SimiTRY" />
      <pc-button-02 class="button-possition2" href="#form" />
    </div>
    <a-image :src="require('@/assets/images/pc/pc-offer/picture-04.png')" alt="SimiTRY" class="imag-bottom" />
  </div>
</template>

<style lang="scss" scoped>
.offer {
  .imag-bottom {
    margin-bottom: 30px;
  }
}
.button-1,
.button-2,
.button-3,
.button-4 {
  position: relative;
}
.button-possition1 {
  position: absolute;
  width: 85%;
  right: 7%;
  bottom: 3%;
}
.button-possition2 {
  position: absolute;
  bottom: 14%;
  right: 8%;
  width: 40%;
}
.button-possition3 {
  position: absolute;
  bottom: 4%;
  right: 20%;
  width: 60%;
}
.button-possition4 {
  position: absolute;
  bottom: 24%;
  right: 8%;
  width: 42%;
}
</style>