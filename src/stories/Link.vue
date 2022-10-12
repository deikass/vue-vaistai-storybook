<template>
  <Overlay title="link">
    <li class="link"><a href="/">Apie mus</a></li>
  </Overlay>
  <Overlay title="link--bold">
    <li class="link link-bold"><a href="/">Apie mus</a></li>
  </Overlay>
  <Overlay title="link--danger">
    <li class="link link--danger"><a href="/">Apie mus</a></li>
  </Overlay>
  <Overlay title="link--large">
    <li class="link link--large"><a href="/">Apie mus</a></li>
  </Overlay>
  <Overlay title="link--large link--danger">
    <li class="link link--large link--danger"><a href="/">Apie mus</a></li>
  </Overlay>
  </template>

<style>

.link {
  color: grey;
  text-decoration: none;
}

.link a{
  color: grey;
  text-decoration: none;
}

.link--large{
  font-size: 30px;
}

.link--danger{
  color: red;
}

.link--danger a{
  color: red;
}

.link-bold {
  font-weight: bold;
}


</style>

<script>
import Overlay from './Overlay.vue'

export default {
  components: {Overlay}
}
</script>
