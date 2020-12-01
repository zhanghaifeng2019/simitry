<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class extends Vue {
  private width = window.outerWidth;

  private created() {
    window.addEventListener('resize', () => {
      this.width = window.outerWidth;
    });
  }
}
</script>

<template>
  <div>
    <slot :width="width" />
  </div>
</template>
