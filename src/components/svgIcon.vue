<template>
  <img class="iconSize" :src="imgSrc" alt="Home" />
</template>

<script>
export default {
  props: {
    imgSrc: String,
  },
};
</script>

<style>
.iconSize {
  height: 20px;
}
</style>