<template>
  <div>
   <!--   <nav>
        <router-link to='/'>Home</router-link>
        <router-link to='/edit'>Editar Vehiculo</router-link>
        <router-link to='/list'>Todos los vehiculos</router-link>
        <router-link to='/item'>Vehiculo item</router-link>
    </nav> -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    
  }),
};
</script>
