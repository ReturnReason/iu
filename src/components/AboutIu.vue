<template>
  <div class="container">
    <div class="bg">
      <canvas>이 브라우저는 캔버스를 지원하지 않습니다.</canvas>
    </div>
    <div class="profile-img-container">
      <!-- 프로필 이미지 -->
      <h2>Profile</h2>

      <div class="profile-img">
        <img src="../assets/profile.jpg" alt="" />
      </div>
      <div class="badge-container">
        <button @click="clickBadge" class="click-badge">click me!</button>
      </div>
    </div>

    <!-- 프로필 컨텐츠 -->
    <div class="profile-content">
      <h2>아이유 (이지은)</h2>
      <p>1993. 05. 16</p>
      <p>데뷔일 : 2008년 09월 18일</p>
      <span @click="debut"
        >♥ 데뷔일로부터 <span class="days">{{ days }}일</span>째 ♥</span
      >
    </div>

    <!-- 클릭 뱃지 누르면 보여줄 컨텐츠 -->
    <div class="profile-add-content">
      <div class="add-content">추가할 내용</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutIu',
  data() {
    return {
      days: 0,
    };
  },
  methods: {
    clickBadge() {
      // const container = document.querySelector('.container');
      const profileImgContainer = document.querySelector('.profile-img-container');
      const profileContent = document.querySelector('.profile-content');
      profileImgContainer.classList.add('moveLeft');
      profileContent.classList.add('moveLeft');

      const addContent = document.querySelector('.profile-add-content');
      addContent.classList.add('visible');
    },
  },
  created() {},
  mounted() {
    let debutDate = new Date(2008, 8, 18);
    let toDay = new Date();
    const FromTheDayOfOurDebut = Math.round((toDay.getTime() - debutDate.getTime()) / (1000 * 60 * 60 * 24));
    this.days = FromTheDayOfOurDebut;

    const canvas = document.querySelector('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const ctx = canvas.getContext('2d');
    const TOTAL = 10;
    const petalArray = [];

    const lilacImg = new Image();
    lilacImg.src = '../assets/lilac.png';
    lilacImg.onload = () => {
      for (let i = 0; i < TOTAL; i++) {
        petalArray.push(new Petal());
      }
      console.log(petalArray);
      render();
    };

    function render() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      window.requestAnimationFrame(render);
    }

    render();

    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });

    class Petal {
      constructor() {
        this.x = 0;
        this.y = 0;
      }

      draw() {
        ctx.drawImage(lilacImg, this.x, this.y, 45, 30);
      }
    }
  },
};
</script>

<style>
.container {
  max-width: 100%;
  min-height: 94.2vh;
  height: 100%;
  margin: 0 auto;
  padding-top: 7%;
  position: relative;
  overflow: hidden;
}

.bg {
  width: 100%;
  min-height: 100%;
  background: url('../assets/profile.jpg') no-repeat;
  background-size: 100% auto;
  background-position-y: 50%;
  background-position-x: center;
  filter: blur(50px);
  margin-top: 0px;
  z-index: -5;
  position: absolute;
  top: 0;
  left: 0;
  transform: scale(1.3);
}

.bg::after {
  content: '';
  display: block;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.2);
  filter: none;
}

.profile-img-container {
  position: relative;
  max-width: 1200px;
  height: 500px;
  margin: 0 auto;
  padding: 20px;
}

.profile-img {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 25%;
  overflow: hidden;
  border-radius: 5px;
  box-shadow: 3px 3px 40px rgba(0, 0, 0, 0.2);
}

.profile-img img {
  display: block;
  width: 300px;
  transition: all 0.5s;
}

.profile-img img:hover {
  transform: scale(1.1);
}

.profile-content {
  color: #fff;
  text-align: center;
  max-width: 1200px;
  margin: 0 auto;
}

.days {
  background: #ae82d7;
  padding: 0 2px;
}

.badge-container {
  position: absolute;
  left: 57%;
  bottom: 13%;
}

.badge-container::after {
  content: '..';
  display: block;
  border-radius: 50px;
  background: #4f3a63cc;
  padding: 5px 10px;
  width: 100px;
  box-sizing: border-box;
}

.click-badge {
  width: 100px;
  padding: 5px 10px;
  text-align: center;
  background: linear-gradient(#ae82d7, #a175c9);
  border-radius: 50px;
  color: #fff;
  transition: background 0.5s;
  border: none;
  font-size: 16px;
  position: absolute;
  left: -1px;
  bottom: 3px;
  cursor: pointer;
}

.click-badge:hover {
  background: linear-gradient(#b584e3, #b584e3);
  transform: translateY(1px);
}

.profile-add-content {
  background: #a175c9;
  height: 1200px;
  min-width: 50%;
  position: absolute;
  top: 0;
  right: 0;
  z-index: -1;
  opacity: 0;
  transition: all 1s;
}

.add-content {
  width: 100%;
  height: 100px;
  background: #fff;
}

.moveLeft {
  transform: translate(-20%);
  animation: move 1s;
}

@keyframes move {
  0% {
    transform: translate(0);
  }

  100% {
    transform: translate(-20%);
  }
}

.visible {
  opacity: 0.5;
}
</style>
