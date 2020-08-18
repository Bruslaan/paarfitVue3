<template>
  <div class="user-box">
    <div @click="openModal">
      <slot></slot>
    </div>
    <teleport to="#modal_Container" :display="!isPopUpOpen">
      <div v-show="isPopUpOpen">
        <div @click="closeModal" class="dark_overlay">
          <div class="modal">
            <div class="modal__Buttons">
              <div class="dropDown__Container">
                <div>
                  <div class="dropDown_Button">Profil</div>
                  <div class="dropDown_Button">Favoriten</div>
                  <div class="dropDown_Button">Einstellungen</div>
                </div>
                <div @click="closeModal" class="dropDown_Button dropDown_Bottom_Button">Abbrechen</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </teleport>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    let isPopUpOpen = ref(false);
    function openModal() {
      isPopUpOpen.value = true;
    }
    function closeModal() {
      isPopUpOpen.value = false;
    }
    return {
      isPopUpOpen,
      openModal,
      closeModal,
    };
  },
};
</script>

<style>
.modal__Buttons {
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: center;
}
.modal {
  background: white;

  width: 400px;
  
  flex-shrink: 1;
  -webkit-box-pack: center;
  justify-content: center;
  max-height: calc(100% - 40px);
  margin: 10px;
  border: 0 solid #000;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
}
@media (max-width: 800px) {
  .modal {
    width: 100%;
  }
}

.dark_overlay {
  bottom: 0;
  left: 0;
  position: fixed;
  display: flex;
  justify-content: space-around;
  align-items: center;
  -webkit-box-align: center;
  right: 0;
  top: 0;
  z-index: 310 !important;
  background: rgba(0, 0, 0, 0.6);

  /* background: red; */
}
</style>