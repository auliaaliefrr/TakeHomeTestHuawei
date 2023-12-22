<template>
  <nav class="d-flex justify-content-between align-items-center fixed-top">
    <div class="d-flex align-items-center">
      <img src="/src/assets/img/forwork.png" class="logo" alt="Logo">
    </div>
    <ul class="list-inline">
      <li class="list-inline-item navbarnav nav-active" id="home"><router-link to="/"><p>Home</p></router-link></li>
      <li class="list-inline-item navbarnav" id="about"><router-link to="/aboutus">About Us</router-link></li>
      <li class="list-inline-item navbarnav" id="services"><router-link to="/">Services</router-link></li>
      <li class="list-inline-item navbarnav" id="faq"><router-link to="/">FAQs</router-link></li>
    </ul>
    <div class="d-flex align-items-center">
      <button class="btn btn-dark contact-us rounded-6 navbarnav">Contact Us</button>
    </div>
  </nav>
</template>

<script>
export default {
  async mounted() {
    $(document).ready(function(){
      $("#home").click(function(){
          $("#home").addClass('nav-active');
          $("#about").removeClass('nav-active');
          $("#services").removeClass('nav-active');
          $("#faq").removeClass('nav-active');
      });
      $("#about").click(function(){
          $("#home").removeClass('nav-active');
          $("#about").addClass('nav-active');
          $("#services").removeClass('nav-active');
          $("#faq").removeClass('nav-active');
      });
    });
  },
}
</script>
<!-- 
export default = "kalo lu mau baca komponen ini secara global dan render by page diload."
kenapa ini ga butuh? karena ini komponen. yang diload hanya di index.vue
  -->

<style scoped>
.nav-active{
  background-color: red;
}
.contact-us{
  margin-right: 126px;
}

.logo{
  margin-left: 126px;
}

.navbarnav{
  font-weight: 600;
}

nav {
  background-color: #ffffff;
  padding: 10px;
  height : 80px;
}

ul {
  list-style-type: none;
  padding: 0;
  margin-bottom: 0px;
}

.list-inline-item{
  margin-right: 46px;
}

a {
  text-decoration: none;
  color: black;
}
</style>
