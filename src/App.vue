<template>
  <div class="app">
    <div class="spacer"></div>
    <navBar />
    <div id="modal_Container"></div>
    <mainContainer>
      <router-view />
    </mainContainer>

    <bottomNavBar />
  </div>
</template>

<script>
import mainContainer from "./components/mainContainer.vue";
import navBar from "./components/navBar.vue";
import bottomNavBar from "./components/bottomNavBar.vue";
import blog from "./views/blog.vue";
export default {
  name: "App",
  components: { navBar, mainContainer, blog, bottomNavBar },
};
</script>

<style >
.spacer {
  height: 54px;
}

.app {
  min-height: 100%;
  flex-shrink: 0;
  margin: 0;
  padding: 0;
  position: relative;
}
</style>
