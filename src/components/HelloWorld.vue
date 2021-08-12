<template>
  <v-card
    class="mx-auto overflow-hidden"
    height="100vh"
    width="100%"
  >

    <v-app-bar
      color="deep-purple accent-4"
      dark
      prominent
      height="50px"
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <h4 class="app-title">
        Sistema de parqueadero
      </h4>


      <v-spacer></v-spacer>
        <div v-if="showSearchInput" >
          <input v-model="searchContent" @keypress="searchField" @blur="showSearchInput = false" class="search-field" type="text" placeholder="Busca tu vehiculo">
        </div>
      <v-btn icon @click.stop="showSearchInput = !showSearchInput">
        
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-filter</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      bottom
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-title>Foo</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Bar</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Fizz</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Buzz</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-card-text>
      esto es lo que voy a buscar {{searchContent}}
    </v-card-text>
  </v-card>
</template>


<script>
export default {
  name: "HelloWorld",

 data: () => ({
      drawer: false,
      group: null,
      showSearchInput:false,
      searchContent:''
    }),
    methods: {
      searchField(event){
        if (event.keyCode =='13'){
          //user press enter
          this.showSearchInput = false
          alert(this.searchContent)
        }
      }
    },

    watch: {
      group () {
        this.drawer = false
      },
    },
  }
</script>


<style lang="scss" scoped>
.search-field{
   background-color: white;
    margin-top: 10px;
    border-radius: 13px;
    padding: 2px;
    text-align: center;
    outline: none;

}
.app-title{
  margin-top: 10px;
      width: 100%;
    text-align: center;
}
</style>
