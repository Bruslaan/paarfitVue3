<template>
  <div class="app">
    <div class="spacer"></div>
    <navBar />
    <mainContainer />
  </div>
</template>

<script>
import mainContainer from "./components/mainContainer.vue";
import navBar from "./components/navBar.vue";
export default {
  name: "App",
  components: { navBar, mainContainer },
};
</script>

<style >
.spacer {
  height: 64px;
}

.app {
  min-height: 100%;
  flex-shrink: 0;
  margin: 0;
  padding: 0;
  position: relative;
}
</style>
