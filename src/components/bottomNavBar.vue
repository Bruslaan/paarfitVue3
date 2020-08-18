<template>
  <nav class="navBar safeArea">
    <div class="navBar__Elements">
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


      </div>
    </div>
  </nav>
</template>

<script >
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

<style scoped>
.navBar {
  position: fixed;

  z-index: 3;
  bottom: 0;
  right: 0;
  left:0;
  width: 100%;
  display: flex;
  background-color: white;
  border-top: 1px solid var(--border-color);
  padding:10px;
  justify-content: space-evenly;
  align-items: center;
}

@media (min-width: 900px) {
  .navBar {
    display: none;
  }
}

.navBar .navBar__Elements {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  max-width: var(--content-width);
  /* padding: 0 20px; */
}

.navBar .menu {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-evenly;
}
</style>