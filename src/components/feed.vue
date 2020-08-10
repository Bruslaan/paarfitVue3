<template>
  <div class="feed_Card">
    <!-- <img
      class="feed_image"
      src="https://picsum.photos/600"     
    /> -->
  </div>
</template>

<script>
export default {};
</script>

<style>

.feed_image{
height: 100%;
width: 100%;
 -o-object-fit: contain;
  object-fit: contain;
}


.feed_Card {
  max-height: 600px;
  min-height: 300px;
  page-break-after: 10px;
  border-radius: 5px;
  border: 1px solid var(--border-color);
  margin-bottom: 50px;
  background: white;
}
</style>