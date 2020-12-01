<script lang="ts">
import AImage from '@/components/atoms/Image.vue';
import QuestionArea from '@/components/atoms/QuestionArea.vue';
import Accordion from '@/components/molecules/Accordion.vue';
import PcBuyBox from '@/components/molecules/pc/PcBuyBox.vue';
import APcCarousel from '@/components/molecules/pc/PcCarouselSide.vue';
import PcUnixArea from '@/components/molecules/pc/PcUnixArea.vue';
import PcUnixArea2 from '@/components/molecules/pc/PcUnixArea2.vue';
import { Component, Vue } from 'vue-property-decorator';
import { Carousel, Slide } from 'vue-carousel';
    import ASpCarousel from '@/components/molecules/sp/SpCarouselSide.vue';

@Component({
  components: {
    AImage,
    Accordion,
    APcCarousel,
    QuestionArea,
    PcUnixArea,
    PcUnixArea2,
    PcBuyBox,
    ASpCarousel,
    Carousel,
    Slide,
  },
})
export default class extends Vue {}
</script>

<template>
  <div class="container pc">

    <a-image :src="require('@/assets/images/pc/materials/picture-01.png')" alt="SimiTRY" />
    <a-image :src="require('@/assets/images/pc/materials/picture-02.png')" alt="SimiTRY" />
    <a-image :src="require('@/assets/images/pc/materials/picture-03.png')" alt="SimiTRY" />
    <a-image :src="require('@/assets/images/pc/materials/picture-04.png')" alt="SimiTRY" />

    <a-image :src="require('@/assets/images/pc/materials/picture-05.png')" alt="SimiTRY" />
    <a-image :src="require('@/assets/images/pc/materials/picture-06.png')" alt="SimiTRY" />
    <a-image :src="require('@/assets/images/pc/pc-offer/picture-01.png')" alt="SimiTRY" />
    <pc-unix-area2 />

    <a-image :src="require('@/assets/images/pc/materials/picture-08.png')" alt="SimiTRY" />
    <a-sp-carousel />
    <carousel />

    <a-image :src="require('@/assets/images/pc/materials/picture-12.png')" alt="SimiTRY" />
    <a-image :src="require('@/assets/images/pc/materials/picture-14.png')" alt="SimiTRY" />
    <a-image :src="require('@/assets/images/pc/materials/picture-15.png')" alt="SimiTRY" />
    <a-image :src="require('@/assets/images/pc/materials/picture-16.png')" alt="SimiTRY" />
    <a-image :src="require('@/assets/images/pc/materials/picture-17.png')" alt="SimiTRY" />
    <a-image :src="require('@/assets/images/pc/materials/picture-18.png')" alt="SimiTRY" />
    <a-image :src="require('@/assets/images/pc/materials/picture-19.png')" alt="SimiTRY" />
    <a-image :src="require('@/assets/images/pc/materials/picture-20.png')" alt="SimiTRY" />
    <a-image :src="require('@/assets/images/pc/materials/picture-21.png')" alt="SimiTRY" />
    <a-image :src="require('@/assets/images/pc/materials/picture-22.png')" alt="SimiTRY" />
    <a-image :src="require('@/assets/images/pc/materials/picture-23.png')" alt="SimiTRY" />
    <a-image :src="require('@/assets/images/pc/materials/picture-23-1.png')" alt="SimiTRY" />
    <a-image :src="require('@/assets/images/pc/materials/picture-23-2.png')" alt="SimiTRY" />
    <a-image :src="require('@/assets/images/pc/materials/picture-23-3.png')" alt="SimiTRY" />
    <a-image :src="require('@/assets/images/pc/materials/picture-27.png')" alt="SimiTRY" />
    <a-image :src="require('@/assets/images/pc/materials/picture-28.jpg')" alt="SimiTRY" />

    <accordion />
    <a-image :src="require('@/assets/images/pc/materials/picture-32.jpg')" alt="SimiTRY" class="imag-top" />
    <p class="pc-text-all">※１．抑制黑色素生成，預防色斑雀斑。 ※２．讓乾燥細紋變得不明顯（已通過效果測試檢驗）</p>

    <a-image :src="require('@/assets/images/pc/materials/picture-34.png')" alt="SimiTRY" />
    <a-image :src="require('@/assets/images/pc/materials/picture-09.png')" alt="SimiTRY" />
    <a-image :src="require('@/assets/images/pc/materials/picture-10.png')" alt="SimiTRY" />
    <a-image :src="require('@/assets/images/pc/materials/picture-38.png')" alt="SimiTRY" />
    <a-image :src="require('@/assets/images/pc/materials/picture-39.png')" alt="SimiTRY" />
    <a-image :src="require('@/assets/images/pc/materials/picture-39-1.png')" alt="SimiTRY" />
    <a-image :src="require('@/assets/images/pc/materials/picture-66.png')" alt="SimiTRY" />

    <question-area />

    <p class="pc-text-all">※１．抑制黑色素生成，預防色斑雀斑。※２．介面活性劑※4．礦物油、香料、色素、防腐劑、乙醇、矽靈 ※3. 至角質層 ※4．不使用介面活性劑進行乳化。</p>


    <a-image :src="require('@/assets/images/pc/materials/picture-67.png')" alt="SimiTRY" />
    <a-image :src="require('@/assets/images/pc/materials/picture-68.png')" alt="SimiTRY" />

    <a-image :src="require('@/assets/images/pc/pc-offer/picture-01.png')" alt="SimiTRY" />
    <pc-unix-area />
  </div>
</template>

<style lang="scss">
.container {
  margin: 0 auto;
  width: 100%;
  max-width: 960px;
  background-color: #fff;
  color: #3c2313;

  .button-box-area {
    margin: 0 40px 30px;
  }

  .pc-text-all {
    margin: 10px auto 100px;
    font-size: 12px;
    padding: 0 20px;
  }

  .imag-top {
    margin-top: 60px;
  }

  .imag-box {
    border-color: #000;
    border-width: 1px 0 4px 0;
    border-style: solid solid double solid;
  }

  .text-box {
    display: flex;
    flex-direction: column;
    margin: 20px auto;
    border-bottom: solid 1px #000;
    padding: 10px;

    .text-contents {
      padding: 10px;
      justify-content: center;
      .text-title {
        padding: 4px 0 4px 4px;
        font-size: 18px;
        color: #fff;
        width: 100%;
        background-color: #214a80;
        margin-bottom: 10px;
      }
    }
  }
}
</style>
