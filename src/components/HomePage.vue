<template>
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
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {};
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

<style></style>
