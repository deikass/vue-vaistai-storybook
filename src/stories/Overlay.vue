<template>
  <div class="item-story-wrapper">
    <div class="item-story__title">{{title}}</div>
<!--    <div class="item-story__hr" />-->
    <div class="item-story">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String
  }
}

</script>

<style>
.item-story-wrapper {
  padding-bottom: 50px;
  width: fit-content;
}

.item-story {
  padding: 20px;
  border: 1px dashed #9747FF;
  border-radius: 5px;
}
.item-story__title {
  font-family: Arial,serif;
  padding-bottom: 10px;
  /*font-weight: bold;*/
}

.item-story__hr {
  border-top: 1px solid;
  padding-bottom: 20px;
}

</style>
