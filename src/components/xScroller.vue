<template>
  <div class="viewport">
    <ul class="list">
      <li v-for="i in 10" :key="i" class="item">
        test
        <!-- <img src="../assets/thumbnail.png" class="thumbnail" alt /> -->
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style>
.thumbnail {
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
}
video {
  /* max-width: var(--content-width); */
  width: 100%;
  outline: none;
}

.viewport {
  width: 100%;
  margin-left: 10px;
  margin-right: 10px;
}

.leftRadius {
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
}
@media (min-width: 640px) {
  .rightRadius {
    border-top-right-radius: 50px;
    border-bottom-right-radius: 50px;
  }
}

.list {
  list-style: none;
  border: solid 1px var(--border-color);
  display: flex;
  flex-shrink: 0;
  border-radius: 4px;
  padding: 20px;
  margin: 10px;
  overflow-x: scroll;
  background: rgb(247, 247, 247);

  /* scroll-snap-type: both mandatory; */
  /* scroll-padding: 10px; */
}

.item {
  height: 324px;
  width: 230px;
  flex-shrink: 0;
  scroll-snap-align: start;
  border: solid 1px var(--border-color);
  border-radius: 4px;
  background: white;
}

.item:not(:last-child) {
  margin-right: 10px;
}
</style>