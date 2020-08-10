<template>
  <div class="navBar">
    <div class="navBar__Elements">
      <logo />
      <avatar size="30px" />
    </div>
  </div>
</template>

<script>
import logo from "./logo.vue";
import avatar from "./avatar.vue";
export default {
  components: {
    logo,
    avatar,
  },
};
</script>

<style>
.navBar {
  display: flex;
  background-color: white;
  border-bottom: 1px solid var(--border-color);
  height: 54px;
  justify-content: center;
  align-items: center;
}

.navBar .navBar__Elements {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: var(--content-width);
  padding: 0 20px;
}
</style>