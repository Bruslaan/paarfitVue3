<template>
  <div class="main_Container">
    <div class="feeds_Container">
      <feedCreator />
      <feed v-for="feed in 5" :key="feed" />
    </div>
    <div class="right_Section">
      <div class="bar2">
        <avatar size="50px" style="margin-bottom:10px" />
        <h2 style="margin-left:10px">Bruslan</h2>
      </div>
      <div class="bar"></div>
    </div>
  </div>
</template>

<script>
import feed from "../components/feed.vue";
import avatar from "../components/avatar.vue";
import feedCreator from "../components/feedCreator.vue";
export default {
  components: {
    feed,
    avatar,
    feedCreator,
  },
};
</script>

<style>
h2 {
  font-family: Logo;
  font-size: 15px;
}

.bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.bar2 {
  display: flex;
  align-items: center;
}

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
  top: 30px;
  position: sticky;
  position: -webkit-sticky;
  right: 0;
  width: 100%;
}

@media (max-width: 900px) {
  .right_Section {
    display: none;
  }
  .main_Container {
    justify-content: center;
  }
  .feeds_Container{
    padding-right: 10px;
    padding-left: 10px;
  }
  
}
@media (min-width: 901px) {
  .right_Section {
    display: block;
  }
  .main_Container {
    justify-content: space-between;
  }
}

.feeds_Container {
  float: left;
  max-width: 614px;
  width: 100%;
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
</style>