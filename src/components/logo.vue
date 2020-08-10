<template>
  <!-- <img
        alt="Instagram"
        class="s4Iyt"
        src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
        srcset="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png 2x"
  />-->
  <dropDown v-slot="scope">
    <a @click="scope.open" class="logo">PaarFit</a>
  </dropDown>
</template>

<script>
import dropDown from "./dropDown.vue";
export default {
  components: { dropDown },
};
</script>

<style>
.logo {
  font-size: 20px;
  font-family: Logo;
  cursor: pointer;
  font-weight: 600;
}
</style>