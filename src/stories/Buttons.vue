<template>
  <template v-if="!variant">
    <button class="button">Skaityti daugiau <i class="icon icon-arrow-right"></i></button>
  </template>
  <template v-if="variant === 'blue'">
    <button class="button button--blue">Plačiau apie prekę <i class="icon icon-arrow-right--white"></i></button>
  </template>
  <template v-if="variant === 'only-icon'">
    <button class="button"><i class="icon icon-arrow-right"></i></button>
  </template>
</template>


<script>
import Overlay from './Overlay.vue'

export default {
  props: {
    variant: String
  },
  components: {Overlay}
}

</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');

.button {
  display: flex;
  gap: 8px;
  font-family: 'Inter', sans-serif;
  background: none;
  color: #00386B;
  border: none;
  padding: 10px 16px;
  cursor: pointer;
  outline: inherit;

  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
}

.button--blue {
  background: linear-gradient(90deg, #1090D0 28.12%, #2875B7 100%);
  border-radius: 4px;
  color: #FFFFFF;
}


.icon-arrow-right {
  background: url(assets/right-Icon.svg) no-repeat;
  float: left;
  width: 20px;
  height: 21px;
}

.icon-arrow-right--white{
  background: url(assets/right-icon-white.svg) no-repeat;
  float: left;
  width: 20px;
  height: 21px;
}
</style>
