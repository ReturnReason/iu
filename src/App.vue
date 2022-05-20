<template>
  <div class="main-container">
    <nav class="menu-container">
      <div class="menu">
        <h1 class="title">아이유 참 좋다</h1>
        <ul>
          <li><a href="">HOME</a></li>
          <li><a href="">ABOUT</a></li>
          <li><a href="">GALLERY</a></li>
        </ul>
      </div>
    </nav>

    <div class="slide-container">
      <!-- <div>슬라이드 테스트</div> -->
    </div>

    <ul class="image-container">
      <li class="imgs img1">
        <p class="img-txt">손 틈새로</p>
      </li>
      <li class="imgs img2">
        <p class="img-txt">비치는</p>
      </li>
      <li class="imgs img3">
        <p class="img-txt">아이유</p>
      </li>
      <li class="imgs img4">
        <p class="img-txt">참 좋다</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
  data() {
    return {
      idx: 0,
    };
  },
  methods: {
    onHover(e) {
      const target = e.target;
      target.classList.add('visible');
    },
  },
  mounted() {
    const img = document.querySelectorAll('.imgs');
    const imgtxt = document.querySelectorAll('.img-txt');
    console.log(img);

    setInterval(imgAnimation, 1000);
    let i = 0;

    function imgAnimation() {
      if (i >= 1) {
        if (i === img.length - 1) {
          img[i].classList.remove('blackBg');
          imgtxt[i].classList.remove('visible');
        }
        img[i - 1].classList.remove('blackBg');
        imgtxt[i - 1].classList.remove('visible');
      }

      if (i >= img.length) {
        i = 0;
        return;
      }

      img[i].classList.add('blackBg');
      imgtxt[i].classList.add('visible');

      i++;
    }
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
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
  background: #c9b2df;
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
}

.menu .title {
  line-height: 0;
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
