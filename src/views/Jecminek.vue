<template>
  <div id="jecminek">
    <div class="container mx-auto px-8 py-16 md:px-16 xl:px-56">
      <h2 class="text-2xl text-left">Pokoje Penzion Ječmínek</h2>
      <div class="flex flex-col space-y-4 py-8">
        <span
          >Na této stránce naleznete seznam pokojů penzionu Ječmínek, jejich
          popis a fotografie.</span
        >
        <span>Ceny jsou včetně 10% DPH</span>
        <span>Cena pokoje neobsahuje lázeňský poplatek 30,- Kč/os/noc.</span>
        <span>Děti do 3 let ZDARMA</span>
      </div>
      <rezervace
        :hotelId="10036"
        roomsId="471548-471550-816377-816373-816373"
      />
      <div class="flex flex-col w-full">
        <pokoj
          v-for="pokoj in info"
          :key="pokoj.id"
          :title="pokoj.title"
          :fotky="pokoj.fotky"
          :pokojId="pokoj.id"
          :roomType="pokoj.roomType"
          penzion="Jecminek"
          :ceny="pokoj.ceny"
          :tags="pokoj.tags"
        />
      </div>
    </div>
    <div class="w-full bg-gray-100">
      <footer
        class="
          container
          mx-auto
          px-8
          py-8
          md:px-16
          xl:px-56
          w-full
          flex
          justify-center
        "
      >
        © 2022 Penziony Luhačovice
      </footer>
    </div>
  </div>
</template>

<script>
import Pokoj from "../components/Pokoj.vue";
import Rezervace from "../components/Rezervace.vue";

export default {
  name: "Jecminek",
  components: {
    Pokoj,
    Rezervace,
  },
  computed: {
    info() {
      return this.$store.state.pokoje.Jecminek;
    },
  },
};
</script>
