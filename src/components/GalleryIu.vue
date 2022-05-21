<template>
  <div class="gallery-container">
    <div class="img-box" v-for="i in 4" :key="i">
      <img src="../assets/iu1.jpg" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'GalleryIu',
  data() {
    return {
      images: [],
    };
  },
  methods: {},
};
</script>

<style>
.gallery-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  max-width: 1200px;
  margin: 0 auto;
  gap: 20px;
}

.img-box {
  overflow: hidden;
  border-radius: 10px;
}

.img-box img {
  width: 100%;
  transition: all 0.5s;
}

.img-box img:hover {
  transform: scale(1.1);
}
</style>
