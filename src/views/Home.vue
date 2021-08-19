<template>
  <v-container class="pa-8" fluid>
    <h1 class="h1">Meus Pets</h1>
    <v-form>
      <v-text-field label="Novo Pet" v-model="novoPet" @keydown.enter="addPet" maxlength="10">
      <v-btn class="ml-2" slot="append" color="light" @click="addCat">🐈</v-btn>
      <v-btn class="ml-2" slot="append" color="secondary" @click="addDog">🐕</v-btn>
      <v-btn class="ml-2" slot="append" color="warning" @click="addPig">🐖</v-btn>
      <v-btn class="ml-2" slot="append" color="accent" @click="addRabbit">🐇</v-btn>
      </v-text-field>
      
    </v-form>
    <v-divider></v-divider><br>
    <v-row>
      <v-card max-width="150" class="mb-5 ml-5" tile v-for="pet of pets" :key="pet.id">
        <v-img height="100" width="150" src="https://i2.wp.com/fazendoasuafesta.com/wp-content/uploads/2017/09/1Convite3-26.jpg?resize=400%2C267">
          <v-row class="fill-height">
            <v-col class="py-8">
                <v-list-item-content>
                  <v-list-item-title class="text-h6 text-center">
                    {{pet.titulo}}
                  </v-list-item-title>
                </v-list-item-content>
            </v-col>
          </v-row>
        </v-img>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
import * as fb from "@/plugins/firebase"
export default {
  data(){
    return{
      uid: '',
      novoPet: "",
      pets:[
      ],
    };
  },
  mounted(){
    this.uid = fb.auth.currentUser.uid;
    this.bucarPetsDoServidor()
  },
  methods:{
    async bucarPetsDoServidor(){
      this.pets = []
      const logPets = await fb.petsCollection.where("owner", "==", this.uid).get();
      for(const doc of logPets.docs){
        this.pets.push({
          id:doc.id,
          titulo:doc.data().titulo,
        })

      }

    },
    async addPet(e){
      e.preventDefault();
      await fb.petsCollection.add({
        titulo:'❓ ' + this.novoPet,
        dataGravacao: new Date().toISOString().slice(0, 10),
        owner: this.uid,
      });
      this.novoPet="";
      this.bucarPetsDoServidor();
    },
    async addCat(e){
      e.preventDefault();
      await fb.petsCollection.add({
        titulo:'🐈 ' + this.novoPet,
        dataGravacao: new Date().toISOString().slice(0, 10),
        owner: this.uid,
      });
      this.novoPet="";
      this.bucarPetsDoServidor();
    },
    async addDog(e){
      e.preventDefault();
      await fb.petsCollection.add({
        titulo:'🐕 ' + this.novoPet,
        dataGravacao: new Date().toISOString().slice(0, 10),
        owner: this.uid,
      });
      this.novoPet="";
      this.bucarPetsDoServidor();
    },
    async addPig(e){
      e.preventDefault();
      await fb.petsCollection.add({
        titulo:'🐖 ' + this.novoPet,
        dataGravacao: new Date().toISOString().slice(0, 10),
        owner: this.uid,
      });
      this.novoPet="";
      this.bucarPetsDoServidor();
    },
    async addRabbit(e){
      e.preventDefault();
      await fb.petsCollection.add({
        titulo:'🐇 ' + this.novoPet,
        dataGravacao: new Date().toISOString().slice(0, 10),
        owner: this.uid,
      });
      this.novoPet="";
      this.bucarPetsDoServidor();
    },
  },
}
</script>

<style>

</style>