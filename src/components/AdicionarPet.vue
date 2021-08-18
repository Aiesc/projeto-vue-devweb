<template>
    <div>
        <img id="imagemFundo" src="passeio.png" alt="passeio">
        <main>
            <header>
                <h2>Lista de passeio de Pets 🐾</h2>
                <input type="text" v-model="pet" placeholder="Nome do Pet">
                <button @click.prevent="addGato">🐈</button>
                <button @click.prevent="addCachorro">🐕</button>
                <button @click.prevent="addPorco">🐖</button>
                <button @click.prevent="addCoelho">🐇</button>
            </header>

            <section>
                <ol>
                    <li v-for="pet in filtraPets" :key="pet.text" v-on:click="trocaPet(pet)">
                        <div>
                            <input type="checkbox" v-bind:checked="pet.done">

                            <label>
                                <del v-if="pet.done">
                                    {{ pet.text }}
                                </del>
                                <span v-else>
                                {{ pet.text }}
                            </span>
                            </label>
                        </div>

                        <img src="close-icon.png" @click="deletaPet(pet)" alt="fechar">
                    </li>
                </ol>
            </section>
        </main>
    </div>
</template>

<script>
export default {
    data(){
        return{
             pet: "",
             pets: [
        
            ],
        }
    },
    methods: {
        trocaPet(pet) {
          pet.done = !pet.done;
          this.ordenaPet();
        },
        addGato() {
            if(!this.pet.trim() || this.verificaPet()) return;
            this.pets.push({
                text: '🐈 ' + this.pet  ,
                done: false
            });
            this.pet = "";
            this.ordenaPet();
        },
        addCachorro() {
            if(!this.pet.trim() || this.verificaPet()) return;
            this.pets.push({
                text: '🐕 ' + this.pet,
                done: false
            });
            this.pet = "";
            this.ordenaPet();
        },
        addPorco() {
            if(!this.pet.trim() || this.verificaPet()) return;
            this.pets.push({
                text: '🐖 ' + this.pet,
                done: false
            });
            this.pet = "";
            this.ordenaPet();
        },
        addCoelho() {
            if(!this.pet.trim() || this.verificaPet()) return;
            this.pets.push({
                text: '🐇 ' +  this.pet,
                done: false
            });
            this.pet = "";
            this.ordenaPet();
        },
        deletaPet(pet) {
            this.pets = this.pets.filter(el => el.text !== pet.text);
        },
        ordenaPet() {
            this.pets.sort((a,b) => a.done - b.done);
        },
        verificaPet() {
            return this.pets.some((pet) => pet.text === this.pet.trim());
        }
    },
    computed: {
      filtraPets() {
          return this.pets.filter(
              pet => pet.text.toLowerCase().match(this.pet.toLowerCase())
          );
      }
  }
}
</script>

<style>

</style>