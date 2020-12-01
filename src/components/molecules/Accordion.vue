<script lang='ts'>
import AImage from '@/components/atoms/Image.vue';
import PcBuyBox from '@/components/molecules/pc/PcBuyBox.vue';
import { BulmaAccordion, BulmaAccordionItem } from 'vue-bulma-accordion';

import { Component, Vue } from 'vue-property-decorator';
@Component({
  components: {
    BulmaAccordion,
    BulmaAccordionItem,
    AImage,
    PcBuyBox,
  },
})
export default class extends Vue {}
</script>

<template>
  <bulma-accordion
    :dropdown="true"
    :slide="{duration: '500ms', timerFunc:'ease'}"
    class="manga-accordion"
    icon="custom"
  >
    <bulma-accordion-item>
      <template slot="title">
        <pc-buy-box class="manga-accordion" />
      </template>
      <template slot="content">
        <a-image :src="require('@/assets/images/pc/materials/picture-30.jpg')" alt="SimiTRY" />
        <a-image :src="require('@/assets/images/pc/materials/picture-31.jpg')" alt="SimiTRY" />
      </template>
    </bulma-accordion-item>
  </bulma-accordion>
</template>

<style lang="scss">
.manga-accordion {
  margin: 0 24px;
}
</style>
