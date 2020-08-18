<template>
  <div class="container">
    <header class="profile_header">
      <div class>
        <Modal>
          <img src="https://picsum.photos/200" alt="Avatar" class="responsive_avatar" />
        </Modal>
      </div>

      <div class="profile_information">
        <h2 class="profile_Name">Bruslan & Anzhie</h2>

        <div style="margin-top:100px"></div>
        <p style="margin-bottom:10px; color:gray">Beginner</p>
        <progreeBar />
      </div>
    </header>
    <h1 class="headers">Statisctics</h1>
    <Modal />
  </div>
</template>

<script>
import Avatar from "../components/avatar.vue";
import progreeBar from "../components/progressBar.vue";
import Modal from "../components/modal.vue";

export default {
  components: {
    Avatar,
    progreeBar,
    Modal,
  },
};
</script>

<style>
.circular {
  position: relative;
  height: 300px;
  width: 300px;
  fill: none;
  stroke: red;
  stroke-width: 8;
  stroke-linecap: round;
}

.profile_Name {
  font-size: 30px;
}

.headers {
  margin-top: 20px;
  margin-left: 30px;
}
.profile_header {
  padding-top: 30px;
  display: flex;
}
.profile_information {
  /* background-color: rgb(235, 235, 235); */
  width: 100%;
  margin-right: 20px;
  padding: 10px;
}
.responsive_avatar {
  vertical-align: middle;
  width: 250px !important;
  height: 250px !important;
  border-radius: 50%;
  cursor: pointer;
  background-color: var(--border-color);
  margin-right: 10px;
  margin-left: 20px;
}
@media (max-width: 900px) {
  .responsive_avatar {
    width: 150px;
    height: 150px;
  }
  .profile_header {
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
  .profile_information {
    margin-left: 20px;
  }
}
</style>