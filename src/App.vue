<template>
  <div class="app">
    <div class="spacer"></div>
    <navBar />
    <feedContainer />
  </div>
</template>

<script>
import feedContainer from "./components/feedsContainer.vue";
import navBar from "./components/navBar.vue";
export default {
  name: "App",
  components: { navBar, feedContainer },
};
</script>

<style >
.spacer {
  height: 54px;
}

.app {
  min-height: 100%;
  overflow: hidden;
  flex-shrink: 0;
  margin: 0;
  padding: 0;
  position: relative;
}
</style>
