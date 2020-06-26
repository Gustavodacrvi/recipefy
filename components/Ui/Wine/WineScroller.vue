<template>
  <div class="WineScoller">
    <TextBox v-model="txt"/>
  </div>
</template>

<script>

import { WinePairingResponse } from "@/interfaces/index.ts"

import TextBox from "@/components/Ui/TransitionElements/TextBox.vue"

const txt = 'Merlot, Cabernet Sauvignon, and Pinot Noir are my top picks for Steak. After all, beef and red wine are a classic combination. Generally, leaner steaks go well with light or medium-bodied reds, such as pinot noir or merlot, while fattier steaks can handle a bold red, such as cabernet sauvingnon. The Sterling Vineyards Merlot with a 5 out of 5 star rating seems like a good match. It costs about 29 dollars per bottle.'

export default {
  components: {
    TextBox,
  },
  props: ['res'],
  data() {
    return {
      txt,
    }
  },
  mounted() {
    const created = () => {
      setTimeout(() => {
        this.txt = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`

        setTimeout(() => {
          this.txt = txt

          created()

        }, 4000)
      }, 4000)
    }

    created()
  },
}

</script>
