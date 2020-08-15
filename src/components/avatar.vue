<template>
  <div class="avatar__Container">
      <img
        src="https://i.pravatar.cc/600"
        loading="lazy"
        alt="Avatar"
        class="avatar"
      />
  </div>
</template>

<script>

export default {
  props: {
    size: String,
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