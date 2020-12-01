<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class extends Vue {
  @Prop()
  private src!: string;

  @Prop()
  private alt!: string;
}
</script>

<template>
  <img :alt="alt" :src="src" class="image" />
</template>

<style lang="scss">
.image {
  display: block;
  width: 100%;
}
</style>
