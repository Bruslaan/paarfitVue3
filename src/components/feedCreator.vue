<template>
  <div class="feed_Creator" :class="{active:feed_creator_Active}">
    <p style="margin-bottom:20px; color:gray">Beitrag erstellen</p>
    <div class="text_composer">
      <avatar size="40px" style="margin-right:10px" />
      <span
        aria-placeholder="Make a new tag"
        placeholder="Schreibt etwas"
        class="textarea"
        role="textbox"
        contenteditable
        @focus="inputFocused"
      ></span>


    </div>
    <button v-if="feed_creator_Active" class="postButton">Posten</button>
  </div>
  <div v-if="feed_creator_Active" @click="closeFeedCreator" class="tab_to_close_Area_Dark"></div>
</template>

<script>
import avatar from "./avatar.vue";
import { ref } from "vue";
export default {
  components: {
    avatar,
  },

  setup(context) {
    let feed_creator_Active = ref(false);

    const closeFeedCreator = () => (feed_creator_Active.value = false);
    const inputFocused = () => (feed_creator_Active.value = true);
    return {
      feed_creator_Active,
      closeFeedCreator,
      inputFocused,
    };
  },
};
</script>

<style>
.postButton {
  cursor: pointer;
  text-decoration: none;
  border: none;
  bottom: 0;
  left: 0;
  right: 0;
  display: block;
  width: 100%;
  background: white;
  padding: 10px;
  /* border: 1px solid var(--border-color) */
}
:hover.postButton {
  background: rgb(245, 245, 245);
}

.tab_to_close_Area_Dark {
  bottom: 0;
  left: 0;
  position: fixed;
  display: block;
  right: 0;
  top: 0;
  z-index: 310 !important;
  background: rgba(0, 0, 0, 0.6);
  /* background: red; */
}

.text_composer {
  display: flex;
  /* align-items: center; */
}
.feed_Creator {
  padding: 20px;

  border: 1px solid var(--border-color);
  margin-bottom: 50px;
  background: white;
  border-radius: 5px;
  position: relative;
  display: flex;
  flex-direction: column;
  transition: height 0.1s ease-in;
}
.feed_Creator.active {
  z-index: 311 !important;
}

.input,
.textarea {
  font-family: inherit;
  font-size: inherit;
  padding: 1px 6px;
}

.textarea {
  display: block;
  width: 100%;
  overflow: hidden;
  outline: none;
  background: rgb(250, 249, 249);
  padding: 10px;
}

textarea {
  border: none;
  resize: none;
}
</style>