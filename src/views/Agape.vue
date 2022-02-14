<template>
  <div id="agape">
    <div class="container mx-auto px-8 py-16 md:px-16 xl:px-72">
      <h2 class="text-2xl text-left">Pokoje Penzion Agape</h2>
      <div class="flex flex-col space-y-4 py-8">
        <span
          >Na této stránce naleznete seznam pokojů penzionu Agape, jejich popis
          a fotografie.</span
        >
        <span>Ceny jsou včetně 10% DPH</span>
        <span>Cena pokoje neobsahuje lázeňský poplatek 30,- Kč/os/noc.</span>
        <span>Děti do 3 let ZDARMA</span>
      </div>
      <div class="flex flex-col w-full">
        <pokoj
          v-for="pokoj in info"
          :key="pokoj.id"
          :title="pokoj.title"
          :fotky="pokoj.fotky"
          :pokojId="pokoj.id"
          :roomType="pokoj.roomType"
          penzion="Agape"
          :ceny="pokoj.ceny"
          :tags="pokoj.tags"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Pokoj from "../components/Pokoj.vue";

export default {
  name: "Agape",
  components: {
    Pokoj,
  },
  computed: {
    info() {
      return this.$store.state.pokoje.Agape;
    },
  },
};
</script>
