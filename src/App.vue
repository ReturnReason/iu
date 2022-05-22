<template>
  <div class="main-container">
    <nav class="menu-container">
      <div class="menu">
        <h1 class="title">아이유 참 좋다</h1>
        <ul>
          <router-link to="/">
            <li><a href="">HOME</a></li>
          </router-link>

          <router-link to="about">
            <li><a href="">ABOUT</a></li>
          </router-link>

          <router-link to="gallery">
            <li><a href="">GALLERY</a></li>
          </router-link>
        </ul>
      </div>
    </nav>

    <div class="slide-container">
      <!-- <div>슬라이드 테스트</div> -->
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
import albumData from './album';

export default {
  name: 'App',
  components: {},
  data() {
    return {
      album: albumData,
    };
  },
  methods: {
    onHover(e) {
      const target = e.target;
      target.classList.add('visible');
    },
  },
};
</script>

<style>
#app {
  font-family: NanumSquare, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

a {
  text-decoration: none;
}

li {
  list-style: none;
}

.main-container {
  position: relative;
}

.menu-container {
  background: #b584e3;
  padding: 20px;
  display: flex;
}

.menu {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: space-between;
  z-index: 5;
}

.menu .title {
  line-height: 0;
  font-size: 18px;
  color: #fff;
}

.menu ul {
  display: flex;
  gap: 20px;
}

.menu li > a {
  color: #fff;
}

.image-container {
  max-width: 1200px;
  height: 500px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  margin-top: 50px;
}

.imgs {
  width: 100%;
  height: 100%;
  background: no-repeat cover;
  background-position: center;
  background-size: auto 100%;
  flex: 1;
  transition: all 1s;
}

.img1 {
  background-image: url('./assets/iu1.jpg');
}
.img2 {
  background-image: url('./assets/iu2.jpg');
}
.img3 {
  background-image: url('./assets/iu3.jpg');
}
.img4 {
  background-image: url('./assets/iu4.jpg');
}

.img-txt {
  text-align: center;
  height: 100%;
  padding-top: 20%;
  font-size: 20px;
  font-weight: bold;
  transition: all 1s;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 1;
}

/* 아이유 이미지 색상 변화  */
.blackBg {
  content: '';
  display: block;
  flex: 1.3;
  background-color: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
  background-blend-mode: multiply;
}

.visible {
  opacity: 1;
  background-color: rgba(0, 0, 0, 0);
  color: transparent;
}
</style>
