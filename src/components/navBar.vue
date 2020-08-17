<template>
  <nav class="navBar">
    <div class="navBar__Elements">
      <logo @click="$router.push('/')" />
      <div class="menu">
        <router-link to="/">
          <img
            class="iconSize"
            src="../assets/icons/home-solid.svg"
            style="margin-right:20px"
            alt="Home"
          />
        </router-link>
        <router-link to="/profile">
          <img
            class="iconSize"
            src="../assets/icons/profile.svg"
            style="margin-right:20px"
            alt="Profile"
          />
        </router-link>
        <router-link to="/training">
          <img
            class="iconSize"
            src="../assets/icons/dumbbell-solid.svg"
            style="margin-right:20px"
            alt="Training"
          />
        </router-link>

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
import svgIcon from "./svgIcon.vue";
export default {
  components: {
    logo,
    avatar,
    dropDown,
    svgIcon,
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