<template>
  <nav class="navBar">
    <div class="navBar__Elements">
      <logo />
      <div class="menu">
        <dropDown v-slot="scope">
          <avatar @click="scope.open" size="30px" />
        </dropDown>
      </div>
    </div>
  </nav>
</template>

<script>
import logo from "./logo.vue";
import avatar from "./avatar.vue";
import dropDown from "./dropDown.vue";
export default {
  components: {
    logo,
    avatar,
    dropDown,
  },
};
</script>

<style>
.navBar {
  position: fixed;
  z-index: 3;
  top: 0;
  width: 100%;
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

.navBar .menu {
  display: flex;
  align-items: center;
}
</style>