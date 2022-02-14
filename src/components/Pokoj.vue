<template>
  <div>
    <div class="border-b-2" v-if="roomType == 2">
      <h2 class="text-2xl py-4">{{ title }}</h2>
      <div class="grid grid-cols-12 gap-2">
        <div
          class="
            col-span-12
            md:col-span-6
            bg-picovina
            h-16
            flex
            justify-center
            items-center
          "
        >
          Cena za 1 osobu
        </div>
        <div
          class="
            col-span-12
            md:order-3 md:col-span-6
            h-16
            flex
            justify-center
            items-center
          "
        >
          {{ceny[0]}} Kč
        </div>
        <div
          class="
            col-span-12
            md:order-2 md:col-span-6
            bg-picovina
            h-16
            flex
            justify-center
            items-center
          "
        >
          Cena za 2 osoby
        </div>
        <div
          class="
            col-span-12
            md:order-4 md:col-span-6
            h-16
            flex
            justify-center
            items-center
          "
        >
          {{ceny[1]}} Kč
        </div>
        <div
          class="
            col-span-12
            md:order-5
            bg-picovina
            h-16
            flex
            justify-center
            items-center
          "
        >
          Informace
        </div>
        <div
          class="col-span-12 md:order-6 h-16 flex justify-center items-center"
        >
          KWC,TV
        </div>
      </div>

      <div class="grid grid-cols-12 gap-4 py-12">
        <div
          v-for="fotka in fotky"
          :key="fotka"
          class="col-span-12 md:col-span-4"
        >
          <a :href="require('@/assets/' + fotka)">
            <img
              class="h-96 w-96 object-cover border border-picovina shadow-lg"
              :src="require('@/assets/' + fotka)"
            />
          </a>
        </div>
      </div>
    </div>

    <div class="border-b-2" v-if="roomType == 1">
      <h2 class="text-2xl py-4">{{ title }}</h2>
      <div class="grid grid-cols-12 gap-2">
        <div
          class="
            col-span-12
            md:col-span-6
            bg-picovina
            h-16
            flex
            justify-center
            items-center
          "
        >
          Cena za 1 osobu
        </div>
        <div
          class="
            col-span-12
            md:order-3 md:col-span-6
            h-16
            flex
            justify-center
            items-center
          "
        >
          {{ceny[0]}} Kč
        </div>
        <div
          class="
            col-span-12
            md:col-span-6 md:order-2
            bg-picovina
            h-16
            flex
            justify-center
            items-center
          "
        >
          Informace
        </div>
        <div
          class="
            col-span-12
            md:col-span-6 md:order-6
            h-16
            flex
            justify-center
            items-center
          "
        >
          KWC,TV
        </div>
      </div>

      <div class="grid grid-cols-12 gap-4 py-12">
        <div
          v-for="fotka in fotky"
          :key="fotka"
          class="col-span-12 md:col-span-4"
        >
          <a :href="require('@/assets/' + fotka)">
            <img
              class="h-96 w-96 object-cover border border-picovina shadow-lg"
              :src="require('@/assets/' + fotka)"
            />
          </a>
        </div>
      </div>
    </div>
    <div class="border-b-2" v-if="roomType == 4">
      <h2 class="text-2xl py-4">{{ title }}</h2>
      <div class="grid grid-cols-12 gap-2">
        <div
          class="
            col-span-12
            md:col-span-6
            bg-picovina
            h-16
            flex
            justify-center
            items-center
          "
        >
          Cena za 2 osoby
        </div>
        <div
          class="
            col-span-12
            md:order-3 md:col-span-6
            h-16
            flex
            justify-center
            items-center
          "
        >
          {{ceny[0]}} Kč
        </div>
        <div
          class="
            col-span-12
            md:order-2 md:col-span-6
            bg-picovina
            h-16
            flex
            justify-center
            items-center
          "
        >
          Cena za 4 osoby
        </div>
        <div
          class="
            col-span-12
            md:order-4 md:col-span-6
            h-16
            flex
            justify-center
            items-center
          "
        >
          {{ceny[0]}} Kč
        </div>
        <div
          class="
            col-span-12
            md:order-5
            bg-picovina
            h-16
            flex
            justify-center
            items-center
          "
        >
          Informace
        </div>
        <div
          class="col-span-12 md:order-6 h-16 flex justify-center items-center"
        >
          KWC,TV
        </div>
      </div>

      <div class="grid grid-cols-12 gap-4 py-12">
        <div
          v-for="fotka in fotky"
          :key="fotka"
          class="col-span-12 md:col-span-4"
        >
          <a :href="require('@/assets/' + fotka)">
            <img
              class="h-96 w-96 object-cover border border-picovina shadow-lg"
              :src="require('@/assets/' + fotka)"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    penzion: String,
    title: String,
    pokojId: Number,
    roomType: Number,
    tags: Array,
    fotky: Array,
    ceny: Array,
  },
};
</script>


<style scoped>
</style>