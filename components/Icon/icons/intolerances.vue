<template functional>
<svg
	 width="35px" viewBox="0 0 154.667 154.667" enable-background="new 0 0 154.667 154.667"
	 xml:space="preserve">
<g>
	<path class="primary" :style="{
          fill: props.color || props.primary,
        }" d="M78.482,148.55c-38.414,0-69.667-31.253-69.667-69.667S40.068,9.216,78.482,9.216
		c38.415,0,69.667,31.253,69.667,69.667S116.897,148.55,78.482,148.55z M78.482,19.216c-32.9,0-59.667,26.767-59.667,59.667
		s26.766,59.667,59.667,59.667s59.667-26.767,59.667-59.667S111.383,19.216,78.482,19.216z"/>
</g>
<g>
	<path class="secondary" :style="{
          fill: props.color || props.secondary,
        }" d="M110.985,121.087c-1.433,0-2.855-0.612-3.844-1.799L43.747,43.214c-1.768-2.122-1.481-5.274,0.641-7.042
		c2.122-1.769,5.273-1.481,7.042,0.64l63.395,76.074c1.768,2.122,1.481,5.274-0.641,7.042
		C113.249,120.707,112.114,121.087,110.985,121.087z"/>
</g>
</svg>

</template>

<script>

import mixin from './mixin'

export default {
  mixins: [mixin],
}

</script>

<style lang='sass' src='./css.sass' scoped></style>
