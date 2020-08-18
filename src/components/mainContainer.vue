<template>
  <main class="scrollable_Container">
    <slot></slot>
  </main>
</template>

<script>
export default {};
</script>

<style>
.scrollable_Container {
  overflow-y: scroll;
  height: 100%;
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