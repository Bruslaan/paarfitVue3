<template>
  <div class="dropDownContainer">
    <slot :open="toggleDropDown"></slot>
    <div class="dropDown__Wrapper" aria-hidden="false" v-if="dropDownOpened">
      <div class="nippel"></div>
      <div class="dropDown__Container">
        <div>
          <div class="dropDown_Button">Profil</div>
          <div class="dropDown_Button">Favoriten</div>
          <div class="dropDown_Button">Einstellungen</div>
        </div>
        <div class="dropDown_Button dropDown_Bottom_Button">Abmeden</div>
      </div>
      <div @click="closeDropDown" class="tab_to_close_Area"></div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    let dropDownOpened = ref(false);
    const toggleDropDown = () => (dropDownOpened.value = true);
    const closeDropDown = () => {
      dropDownOpened.value = false;
    };
    return {
      dropDownOpened,
      toggleDropDown,
      closeDropDown,
    };
  },
};
</script>

<style>
.dropDown_Bottom_Button {
  border-top: 1px solid var(--border-color);
}
:hover.dropDown_Button {
  background: rgb(250, 250, 250);
}

.dropDown_Button {
  padding: 10px;

  cursor: pointer;
}

.dropDownContainer {
  position: relative;
}
.nippel {
  bottom: 0;
  position: absolute;
  top: -6px;
  right: 38px;
  z-index: 0;
  transform: rotate(45deg);
  width: 14px;
  height: 14px;
  border: 1px solid rgba(255, 255, 255, 1);
  box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.0975);
  background: rgba(255, 255, 255, 1);
}

.tab_to_close_Area {
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 2;
  /* background: red; */
}
.dropDown__Container {
  background: rgba(255, 255, 255, 1);
  border-radius: 6px;
  height: 100%;
  z-index: 3;
  overflow-x: hidden;
  overflow-y: auto;
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.dropDown__Wrapper {
  background: rgba(255, 255, 255, 1);
  position: absolute;
  border-radius: 6px;
  box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.0975);
  z-index: 3;
  right: -30px;
  margin-top: 12px;
  width: 300px;
}
</style>