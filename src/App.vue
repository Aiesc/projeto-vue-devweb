<template>
<section>
    <cabecalho/>
    <adicionar-pet/>
    <rodape/>
</section>
</template>

<script>
import Cabecalho from '@/components/Cabecalho';
import Rodape from '@/components/Rodape';
import AdicionarPet from './components/AdicionarPet.vue';
export default {
  name: "App",
  components:{Cabecalho, Rodape, AdicionarPet},
  data() {
    return {
    };
  },
};
</script>

<style>

</style>
