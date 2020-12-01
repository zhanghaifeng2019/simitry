<script lang="ts">
import Responsive from '@/components/atoms/Responsive.vue';

import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    Responsive,
    PC: () => import('@/components/views/PC.vue'),
    SP: () => import('@/components/views/SP.vue'),
  },
})
export default class extends Vue {}
</script>

<template>
  <responsive id="app" v-slot="screen">
    <SP v-if="screen.width <= 480" />
    <PC v-else />
  </responsive>
</template>

<style src="normalize.css"></style>
<style lang="scss">
html,
body {
  width: 100%;
}

html {
  font-size: 62.5%;
  line-height: 1.6;
}

body {
  margin: 0;
  background-color: #f8f8f8;
  color: #435b71;
  font-size: 1.6rem;
  font-family: -apple-system, BlinkMacSystemFont, '游ゴシック Medium', '游ゴシック体', 'Yu Gothic Medium', YuGothic,
    'ヒラギノ角ゴ ProN', 'Hiragino Kaku Gothic ProN', 'メイリオ', Meiryo, sans-serif;
}

a {
  color: #666;
  text-decoration: none;

  &:hover {
    color: #999;
  }
}
</style>
