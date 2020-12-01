<script lang="ts">
import { Carousel, Slide } from 'vue-carousel';
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  components: {
    Carousel,
    Slide,
  },
})
export default class extends Vue {}
</script>

<template>
  <carousel
    :navigation-enabled="true"
    :per-page="4"
    :scrollPerPage="false"
    :speed="1000"
    navigation-next-label
    navigation-prev-label
  >
    <slide>
      <img alt="minori" class="slide-image" src="@/assets/images/common/slider/picture-1.jpg" />
    </slide>
    <slide>
      <img alt="riethoun" class="slide-image" src="@/assets/images/common/slider/picture-2.jpg" />
    </slide>
    <slide>
      <img alt="kanon" class="slide-image" src="@/assets/images/common/slider/picture-3.jpg" />
    </slide>
    <slide>
      <img alt="senchou" class="slide-image" src="@/assets/images/common/slider/picture-4.jpg" />
    </slide>
    <slide>
      <img alt="chich" class="slide-image" src="@/assets/images/common/slider/picture-5.jpg" />
    </slide>
    <slide>
      <img alt="mya" class="slide-image" src="@/assets/images/common/slider/picture-6.jpg" />
    </slide>
    <slide>
      <img alt="rena" class="slide-image" src="@/assets/images/common/slider/picture-7.jpg" />
    </slide>
    <slide>
      <img alt="oisigohan" class="slide-image" src="@/assets/images/common/slider/picture-8.jpg" />
    </slide>
    <slide>
      <img alt="riethuan" class="slide-image" src="@/assets/images/common/slider/picture-9.jpg" />
    </slide>
    <slide>
      <img alt="09090809" class="slide-image" src="@/assets/images/common/slider/picture-10.jpg" />
    </slide>
    <slide>
      <img alt="miu" class="slide-image" src="@/assets/images/common/slider/picture-11.jpg" />
    </slide>
    <slide>
      <img alt="slide" class="slide-image" src="@/assets/images/common/slider/picture-12.jpg" />
    </slide>
  </carousel>
</template>

<style lang="scss">
.VueCarousel {
  padding: 0 32px;

  .slide-image {
    display: block;
    width: 80%;
    margin: 0 auto;
  }

  .VueCarousel-navigation-prev,
  .VueCarousel-navigation-next {
    position: absolute;
    top: 160px;
    text-indent: 100%;
    width: 20px;
    height: calc(100% - 70px);
    overflow: hidden;
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
    background-color: #5d85c2;
  }

  .VueCarousel-navigation-prev {
    left: 20px !important;
    background-image: url('../../../assets/images/common/slider-assets/left.png');
  }

  .VueCarousel-navigation-next {
    right: 20px !important;
    background-image: url('../../../assets/images/common/slider-assets/right.png');
  }
}
</style>
