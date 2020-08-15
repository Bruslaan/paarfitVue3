<template>
  <div class="container">
    <div class="workoutContainer">
      <h1>Woche 1</h1>
      <div class="button_wrapper">
        <pulseButton @click="$router.push('/start_workout')" />
      </div>
    </div>
  </div>
</template>

<script>
import pulseButton from "../components/pulseButton.vue";
export default {
  components: {
    pulseButton,
  },
};
</script>

<style>
.button_wrapper{

    padding-right:20px;
    padding-left:20px
}
.workoutContainer {
  height: 100%;
  margin-top: 100px;
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
}
</style>