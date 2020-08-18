<template>
  <div class="feed_Card">
    <div class="feed_Content">
      <img class="feed_Image" src="https://picsum.photos/1001" />

      <div class="feed_Header">
        <Avatar size="40px" style="margin-right:10px" />
        <h3>Bruslan</h3>
      </div>
    </div>
  </div>
</template>

<script>
import Avatar from "./avatar.vue";
export default {
  components: {
    Avatar,
  },
};
</script>

<style>
.feed_Content {
  width: 100%;
}

.feed_Header {
  display: flex;
  padding: 15px;
  align-items: center;
}
.feed_Image {
  -o-object-fit: contain;
  object-fit: contain;
  width: 100%;
}

.feed_Card {
  overflow: hidden;

  min-height: 300px;
  page-break-after: 10px;
  border-radius: 5px;
  border: 1px solid var(--border-color);
  margin-bottom: 50px;
  background: white;
}
</style>