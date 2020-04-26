<template>
  <div class="home">
    <Menu id="MenuConsulta"/>
    <Consulta />
        <div id="nav"> 
    </div>
    <router-view/>
  </div>
</template>
<script>
// @ is an alias to /src
import Consulta from '../components/Consulta.vue'
import Menu from '../components/Menu.vue'
export default {
  components: {
    Consulta,
    Menu
  }
}
</script>
<style>
  #Home{
    margin-top: -500px;
  }
  #MenuConsulta {
    margin-top: 30px;
  }
</style>