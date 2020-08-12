<template>
  <div class="app">
    <div class="spacer"></div>
    <navBar />
    <mainContainer>
      <router-view />
    </mainContainer>
  </div>
</template>

<script>
import mainContainer from "./components/mainContainer.vue";
import navBar from "./components/navBar.vue";
import blog from "./views/blog.vue";
export default {
  name: "App",
  components: { navBar, mainContainer, blog },
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
