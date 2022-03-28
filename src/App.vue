<template>
  <div class="app bg-light">
      <header><header-content/></header> 
      <aside>
        <side-pannel/>

      </aside>
      <main><router-view></router-view></main>
      <footer style="margin-left:auto">(c) Лобов Иван 201-327</footer>
  </div>
</template>

<script>
import HeaderContent from "@/components/HeaderContent"
import SidePannel from "@/components/SidePannel"

export default {

  components: {
    HeaderContent,
    SidePannel,
  },

}
</script>
    SidePannel

<style>
body, html{
  height: 100%;
}
#app{
  height: 100%;
}
.app {
  min-height: 100%;
  display: grid;
  grid-template-areas:
    'header header'
    'menu   content'
    'footer footer';
  grid-template-columns: 12rem 1fr;
  grid-template-rows: 5rem 1fr 3rem;
}

header {
  grid-area: header;
  
}

main {
  grid-area: content;
}

aside {
  grid-area: menu;
}

footer {
  grid-area: footer;
}

@media (max-width: 600px) {
  .app {
    grid-template-areas:
      'header'
      'menu'
      'content'
      'footer';
    grid-template-columns: 1fr;
    grid-template-rows: 5rem auto 1fr 3rem;
  }
}
</style>
