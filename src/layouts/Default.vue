<template>
  <v-app>
    <v-app-bar app color="dark" dark elavation="1">
      
      <v-spacer></v-spacer>
      <v-icon>mdi-account</v-icon>
    </v-app-bar>
    <v-navigation-drawer app v-model="sidebar" :mini-variant.sync="mini">
      <v-list dense color="secondary" dark>
        <v-list-item class="px=2" @click="mini = !mini">
          <v-list-item-action>
            <v-icon>mdi-chevron-left</v-icon>
          </v-list-item-action>
          <v-list-item-title>
            <h3>Menu</h3>
          </v-list-item-title>
        </v-list-item>
      </v-list>
      
      <v-divider></v-divider>
      <v-list-item v-for="item of items" :key="item.title" link :to="item.to">
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>{{ item.title }}</v-list-item-content>
      </v-list-item>
    </v-navigation-drawer>
    <v-main>
      <router-view></router-view>
    </v-main>
    <v-footer app class="py-3"><span class="caption">Pets🐾 &copy;2021</span></v-footer>
  </v-app>

</template>

<script>
export default {
  data(){
    return{
      mini: false,
      items: [
        {title: "Home", icon: "mdi-account", to: "/" },
        {title: "Perfil", icon: "mdi-account-cog", to: "/perfil" },
        {title: "Sair", icon: "mdi-exit-to-app", to: "/login" },
      ]
    };
  },

};
</script>

<style>

</style>