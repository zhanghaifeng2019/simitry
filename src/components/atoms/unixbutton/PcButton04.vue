<script lang='ts'>
import { Component, Prop, Vue } from 'vue-property-decorator';
@Component({
  components: {},
})
export default class extends Vue {
  @Prop()
  private href!: string;
}
</script>

<template>
  <a :href="href" onclick="productChange(45)">
    <img class="img" src="@/assets/images/common/button/picture04.png" />
  </a>
</template>

<style lang="scss" scoped>
.img {
  display: block;
  width: 100%;
}
</style>
