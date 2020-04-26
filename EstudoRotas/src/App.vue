<template>
  <div id="app">
    <div id="nav">
      <div id="PainelMenu">
      <router-link id="Router" to="/Home">Home</router-link> 
       <router-link id="Router" to="/">Notícias</router-link>
       <router-link id="Router" to="/info">Informações</router-link>
       <router-link id="Router" to="/legis">Legislação</router-link>
      </div>
    <router-view/>
  </div>
</div>  
</template>

<style>
#app {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

#nav {
  padding: 30px;
}
#nav a {
  font-weight: bold;
  color: #3c80e7;
  margin-top: 20px;
}
#PainelMenu {
  margin-top: -60px;
  display: flex;
  justify-content: center;
  height: 70px;
  box-shadow: 3px 3px 9px rgb(235, 226, 226);
}
#nav a.router-link-exact-active {
  color: #3c80e7;
  font-size: 17px;
  border-bottom: 4px solid rgb(62, 96, 243);
}
#Router {
  display: flex;
  align-items: center;
  font-size: 15px;
  text-decoration: none;
  padding: 20px;
}
#Router:hover {
  transition: all 0.40s;
  background-color: rgb(243, 239, 239);
}
</style>
