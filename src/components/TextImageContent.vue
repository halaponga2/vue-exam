<template>
<div class="mainpage-wrapper">
      <p><slot></slot>
    </p>
    <img src="@/assets/home_page_img.jpg" alt="">
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .mainpage-wrapper{
        display: grid; 
  grid-template-columns: 2fr 1fr; 
  grid-template-rows: 1fr; 
  gap: 0px 20px; 
    }
    .mainpage-wrapper p{
    }

    .mainpage-wrapper img{
        width: 100%;
    }
</style>