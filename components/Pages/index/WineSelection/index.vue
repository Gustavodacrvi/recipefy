<template>
  <div class="WineSelection">
    <h2>Wine Pairing</h2>

    <DishSelection
      v-model="selected"
    />
    <WineScroller :res='response'/>
  </div>
</template>

<script>

import DishSelection from './DishSelection.vue'
import WineScroller from "@/components/Ui/Wine/WineScroller.vue"

export default {
  components: {
    DishSelection,
    WineScroller,
  },
  data() {
    return {
      selected: 1,
      response: {
    "pairedWines": [
        "merlot",
        "cabernet sauvignon",
        "pinot noir"
    ],
    "pairingText": "Merlot, Cabernet Sauvignon, and Pinot Noir are my top picks for Steak. After all, beef and red wine are a classic combination. Generally, leaner steaks go well with light or medium-bodied reds, such as pinot noir or merlot, while fattier steaks can handle a bold red, such as cabernet sauvingnon. The Sterling Vineyards Merlot with a 5 out of 5 star rating seems like a good match. It costs about 29 dollars per bottle.",
    "productMatches": [
        {
            "id": 1,
            "title": "Sterling 11111111111111",
            "averageRating": 1.0,
            description: `It is a lng established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`,
            "imageUrl": "https://spoonacular.com/productImages/428278-312x231.jpg",
            "link": "https://www.amazon.com/2014-Sterling-Vineyards-Valley-Merlot/dp/B071FP8NPG?tag=spoonacular-20",
            "price": "$28.99",
            "ratingCount": 1.0,
            "score": 0.75
        },
    ]
},
    }
  },
}

</script>
