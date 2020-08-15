<template>
  <div class="container">
    <div class="workoutContainer">
      <div class="sm:max-w-3xl sm:mx-auto">
        <video
          controls
          class="leftRadius rightRadius"
        >
          <source
            src="../assets/video1.mp4"
            type="video/mp4"
          />
          <source
            src="../assets/video1.mp4"
            type="video/ogg"
          />Your browser does not support HTML5 video.
        </video>
        <!-- <video width="500" height="400" controls> <source src="https://temp.media/video/?height=400&width=500&length=10" type="video/mp4"></video> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>

video{
  /* max-width: var(--content-width); */
  width: 100%;
  outline: none;
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
</style>