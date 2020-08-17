<template>
  <div class="wrapper">
    <div class="progress-bar">
      <span class="progress-bar-fill" style="width: 50%;"></span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

	<style>


.progress-bar {
  width: 100%;
  background-color: #e0e0e0;
  padding: 3px;
  border-radius: 100px;
  /* box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.2); */
}

.progress-bar-fill {
  display: block;
  height: 22px;
  background-color:gray;
  border-radius: 100px;

  transition: width 500ms ease-in-out;
}
</style>