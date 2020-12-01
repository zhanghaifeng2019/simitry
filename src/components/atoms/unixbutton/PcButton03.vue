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
  <a :href="href" onclick="productChange(45)" >
    <img class="img" src="@/assets/images/common/button/picture03.png" />
  </a>
</template>

<style lang="scss" scoped>
.img {
  display: block;
  width: 75%;
  margin: 0 0 0 auto;
}
</style>
