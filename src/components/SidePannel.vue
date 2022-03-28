<template>
  <div class="d-flex flex-column flex-shrink-0 p-3 bg-light" style=" align-items: center;">
    <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
      <span class="fs-4">Навигация</span>
    </a>
    <hr>
    <ul class="nav nav-pills flex-column mb-auto">
      <li class="nav-item">
        <router-link to="/" class="nav-link link-dark" aria-current="page">
          
          Главная
        </router-link>
      </li>
      <li>
        <router-link to="/baby" class="nav-link link-dark">
          
          Малыши
        </router-link>
      </li>
      <li>
        <router-link to="/about" class="nav-link link-dark">
        
          О нас
        </router-link>
      </li>
    </ul>

   
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>