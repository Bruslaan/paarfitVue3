<template>
  <div class="avatar__Container">
    <dropDown v-slot="scope">
      <img
        src="https://i.pravatar.cc/100"
        loading="lazy"
        alt="Avatar"
        class="avatar"
        @click="scope.open"
      />
    </dropDown>
  </div>
</template>

<script>
import dropDown from "./dropDown.vue";
export default {
  props: {
    size: String,
  },
  components: { dropDown },
  setup(props) {
    const size = props.size;

    return {
      size,
    };
  },
};
</script>

<style vars="{size}">
.avatar {
  vertical-align: middle;
  width: var(--size);
  height: var(--size);
  border-radius: 50%;
  cursor: pointer;
  background-color: var(--border-color);
}
</style>