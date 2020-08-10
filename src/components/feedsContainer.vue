<template>
  <main class="scrollable_Container">
    <div class="main_Container">
      <div class="feeds_Container">
        <feed v-for="feed in 10" :key="feed" />
      </div>
      <div class="right_Section">
        halo
      </div>
    </div>
  </main>
</template>

<script>
import feed from "./feed.vue";
export default {
  components: {
    feed,
  },
};
</script>

<style>
.sonstige {
  position: fixed;

  height: 100vh;
  right: 0;
  width: 100%;
  top: 88px;
  max-width: 293px;
  background: red;
}

.right_Section {
  max-width: 293px;
  height: 100vh;
  top:30px;
  position: sticky;
  position: -webkit-sticky;
  right: 0;
  width: 100%;
}

.feeds_Container {
  float: left;
  margin-right: 28px;
  max-width: 614px;
  width: 100%;
}

.container {
  max-width: var(--content-width);
  margin-right: auto;
  margin-left: auto;
}

.main_Container {
  max-width: var(--content-width);
  margin-right: auto;
  margin-left: auto;
  display: flex;
  padding-top: 30px;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-box-flex: 1;
  position: relative;
  width: 100%;
  flex-shrink: 0;
}

.scrollable_Container {
  overflow-y: scroll;
  height: 100vh;
}

/* Hide scrollbar for Chrome, Safari and Opera */
.scrollable_Container::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.scrollable_Container {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>