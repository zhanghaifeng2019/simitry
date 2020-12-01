<script lang='ts'>
import { BulmaAccordion, BulmaAccordionItem } from 'vue-bulma-accordion';
import { Component, Vue } from 'vue-property-decorator';
@Component({
  components: {
    BulmaAccordion,
    BulmaAccordionItem,
  },
})
export default class extends Vue {}
</script>

<template>
  <bulma-accordion :dropdown="true" :slide="{duration: '500ms', timerFunc:'ease'}" class="question-area" icon="custom">
    <bulma-accordion-item>
      <template slot="title">
        <p class="text">用到一半就覺得有改善了，可以暫停使用嗎?</p>
      </template>
      <template slot="content">
        <p
          class="text"
        >色斑並不只是存在肌膚表面，隱藏在肌膚細胞中的隱藏色斑會隨著皮膚細胞代謝慢慢浮現在肌膚表層，進而變成茶褐色的斑點。持續使用SimiTRY，能夠讓隱藏色斑在浮出表層前就抑制素色素黑化的現象。為了維持沒有色斑的透明無暇美肌，建議持續使用。</p>
      </template>
      <template slot="icon-open">ー</template>
      <template slot="icon-closed">＋</template>
    </bulma-accordion-item>
    <bulma-accordion-item>
      <template slot="title">我是敏感肌，這種膚質也能美白※1嗎?</template>
      <template slot="content">
        <p class="text">在研發階段就考量到必須是敏感肌也可用的溫和配方，因此堅持不添加會造成肌膚負擔的幾種化學成分。在美白方面，添加了能滲透到肌膚裡層的美白有效成分，想要美白有感的話很推薦使用。</p>
      </template>
      <template slot="icon-open">ー</template>
      <template slot="icon-closed">＋</template>
    </bulma-accordion-item>
    <bulma-accordion-item>
      <template slot="title">有點擔心只擦這一罐會不夠保濕。有需要多擦幾層嗎?</template>
      <template slot="content">
        <p
          class="text"
        >SimiTRY的觸感清爽不油膩，延展力強、可在皮膚上形成均勻的保護膜，讓美肌效果維持更久更長。如果覺得有些乾燥，經過重複塗擦也能提升保水度。或者是在使用SimiTRY後，塗擦手邊的乳液或乳霜，也可感受到保濕的效果，並不會互相影響。</p>
      </template>
      <template slot="icon-open">ー</template>
      <template slot="icon-closed">＋</template>
    </bulma-accordion-item>
    <bulma-accordion-item>
      <template slot="title">敏感膚質的人在使用上有那些需要注意的?</template>
      <template slot="content">
        <p
          class="text"
        >SimiTRY採用專利配方「片層構造」，利用奈米微粒的特性來進行乳化，非一般市面上使用界面活性劑的方式。少了介面活性劑，在成份上也就對肌膚更溫和。由於不會阻礙肌膚的保護機能，所以也很建議敏感膚質的人使用。但是萬一與膚質不合，則請立刻就醫並停止使用。</p>
      </template>
      <template slot="icon-open">ー</template>
      <template slot="icon-closed">＋</template>
    </bulma-accordion-item>
  </bulma-accordion>
</template>

<style lang="scss">
.question-area {
  padding: 20px;
  .card {
    padding: 16px 0;

    & + .card {
      border-top: solid 1px #ccc;
    }
  }

  .card-header {
    display: flex;
    align-items: center;

    .card-header-title {
      margin: 0;
      display: flex;
      align-items: center;
      font-weight: bold;
      font-size: 18px;
      color: #000;
      flex: 1;

      &::before {
        display: block;
        margin-right: 10px;
        padding: 12px;
        color: #fff;
        font-size: 30px;
        font-weight: normal;
        width: 32px;
        line-height: 32px;
        text-align: center;
        background-color: #214a80;
        content: 'Q';
      }

      .text {
        margin: 0;
        flex: 1;
      }
    }

    .card-header-icon {
      width: 50px;
      height: 50px;
      border-radius: 60%;
      text-align: center;
      line-height: 50px;
      background-color: #214a80;

      .icon {
        font-size: 32px;
        transform: scale(2, 1);
        color: #fff;
      }
    }
  }

  .card-content {
    color: #000;
    display: flex;
    align-items: center;

    &::before {
      display: block;
      margin-right: 10px;
      padding: 12px;
      color: #fff;
      font-size: 30px;
      width: 32px;
      line-height: 32px;
      text-align: center;
      background-color: #214a80;
      content: 'A';
    }

    .text {
      margin: 0;
      flex: 1;
    }
  }
}
</style>
