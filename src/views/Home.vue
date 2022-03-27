<template>
  <div id="home">
    <slider />
    <div class="container mx-auto px-8 py-8 md:px-16 xl:px-56 w-full">
      <h2 class="text-5xl font-light pb-8 uppercase">naše penziony</h2>
      <div class="grid grid-cols-12 grid-flow-row gap-x-4 gap-y-4">
        <router-link
          :to="{ name: 'Jecminek' }"
          class="col-span-12 md:col-span-4"
        >
          <div
            class="
              flex flex-col
              group
              relative
              justify-center
              w-full
              items-center
            "
          >
            <span
              class="
                text-left
                w-full
                text-black text-2xl
                font-light
                uppercase
                pb-2
                lg:hidden
              "
              >Ječmínek</span
            >
            <img
              class="
                object-cover
                outline outline-1 outline-none
                group-hover:outline-white
                transition-all
                duration-500
                filter
                ease-in-out
                outline-offset-[-24px]
              "
              alt="jecminek"
              src="@/assets/penziony/jecminek.jpg"
            />
            <span
              class="
                w-full
                shadow-lg
                h-full
                flex
                text-4xl
                uppercase
                justify-center
                items-center
                font-light
                opacity-0
                group-hover:opacity-100
                transition-opacity
                duration-300
                ease-in
                text-white
                absolute
              "
              >Ječmínek</span
            >
          </div>
        </router-link>
        <router-link
          :to="{ name: 'Jecminek2' }"
          class="col-span-12 md:col-span-4"
        >
          <div
            class="
              flex
              group
              flex-col
              relative
              justify-center
              w-full
              items-center
            "
          >
            <span
              class="
                text-left
                w-full
                text-picovina
                drop-shadow-2xl
                text-2xl
                font-light
                uppercase
                pb-2
                lg:hidden
              "
              >Ječmínek 2</span
            >
            <img
              class="
                object-cover
                outline outline-1 outline-none
                group-hover:outline-white
                transition-all
                duration-500
                ease-in-out
                outline-offset-[-24px]
              "
              alt="jecminek"
              src="@/assets/penziony/jecminek.jpg"
            />
            <span
              class="
                w-full
                shadow-lg
                h-full
                flex
                text-4xl
                uppercase
                justify-center
                items-center
                font-light
                opacity-0
                group-hover:opacity-100
                transition-opacity
                duration-300
                ease-in
                text-white
                absolute
              "
              >Ječmínek 2</span
            >
          </div>
        </router-link>
        <router-link :to="{ name: 'Agape' }" class="col-span-12 md:col-span-4">
          <div
            class="
              flex flex-col
              group
              relative
              justify-center
              w-full
              items-center
            "
          >
            <span
              class="
                text-left
                w-full
                text-black text-2xl
                font-light
                uppercase
                pb-2
                lg:hidden
              "
              >Agape</span
            >
            <img
              class="
                object-cover
                outline outline-1 outline-none
                group-hover:outline-white
                transition-all
                duration-500
                ease-in-out
                outline-offset-[-24px]
              "
              alt="agape"
              src="@/assets/penziony/agape_2.jpg"
            />

            <span
              class="
                w-full
                shadow-lg
                h-full
                flex
                text-4xl
                uppercase
                justify-center
                items-center
                font-light
                opacity-0
                group-hover:opacity-100
                transition-opacity
                duration-300
                ease-in
                text-white
                absolute
              "
              >Agape</span
            >
          </div>
        </router-link>
      </div>
    </div>
    <div
      class="
        container
        mx-auto
        px-8
        py-16
        md:px-16
        xl:px-56
        text-center
        font-semibold
        text-xl
      "
    >
      <p>
        Vítejte na stránkách našich penzionů. Pevně věříme, že si u nás vybere
        své ubytování opravdu každý, jelikož jsou všechny penziony situovány v
        centru Luhačovic a vše je tak nadosah. Všechny pokoje si můžete
        prohlédnout přímo na internetu, takže přesně víte, kde budete bydlet.
        Většina pokojů má své vlastní sociální zařízení a jsou nově
        zrekonstruované a zařízené nábytkem z masivu. Ve všech penzionech je
        ZDARMA možnost Wi-Fi připojení k internetu. To všechno samozřejmě za
        příznivé ceny. Na všechny další dotazy Vám rádi odpovíme na uvedených
        telefonních číslech nebo emailech. Těšíme se na Vaši návštěvu!
      </p>
    </div>

    <div class="container mx-auto px-8 py-8 md:px-16 xl:px-56 w-full">
      <h3 class="text-5xl font-light">REZERVACE</h3>
      <rezervace :hotelId="4879" />
    </div>

    <div class="w-full bg-gray-100">
      <div class="container mx-auto px-8 py-8 md:px-16 xl:px-56 w-full">
        <h2 class="text-5xl font-light pb-8">SLUŽBY</h2>
        <div
          class="
            flex flex-col
            lg:flex-row
            flex-wrap
            justify-start
            space-y-8
            md:space-y-0
          "
        >
          <div class="flex flex-row items-center lg:w-1/2 md:p-4">
            <img class="h-16" alt="masáže" src="@/assets/icons/masaze.png" />
            <div class="text-left flex flex-col px-4 justify-center">
              <span
                class="
                  text-2xl
                  font-semibold
                  uppercase
                  group-hover:text-gray-400
                  duration-300
                "
              >
                Masáže
              </span>
              <span class="text-left font-light">
                Přímo v budově penzionu Ječmínek si můžete zajít na masáže.
                <p class="text-left font-light">
                  Masáž celého těla, krční páteře apod.
                </p>
              </span>
            </div>
          </div>

          <div class="flex flex-row items-center lg:w-1/2 md:p-4">
            <img class="h-16" alt="mix" src="@/assets/icons/mix.png" />

            <div class="text-left flex flex-col px-4 justify-center">
              <span class="text-2xl font-semibold uppercase">
                Kadeřnictví & Manikúra
              </span>
              <span class="text-left font-light">
                V našich penzionech Ječmínek poskytujeme i služby kadeřnictví a
                manikúry
              </span>
            </div>
          </div>

          <div class="flex flex-row items-center lg:w-1/2 md:p-4">
            <img class="h-16" alt="parking" src="@/assets/icons/parking.png" />

            <div class="text-left flex flex-col px-4 justify-center">
              <span class="text-2xl font-semibold uppercase"> Parkování </span>
              <span class="text-left font-light">
                Všechny naše penziony mají svoje soukromé parkoviště
              </span>
            </div>
          </div>

          <div class="flex flex-row items-center lg:w-1/2 md:p-4">
            <img class="h-16" alt="parking" src="@/assets/icons/wifi.png" />

            <div class="text-left flex flex-col px-4 justify-center">
              <span class="text-2xl font-semibold uppercase"> Internet </span>
              <span class="text-left font-light">
                Všechny naše penziony mají přístup k internetu zdarma.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="w-full bg-gray-100">
      <div class="container mx-auto p-8 md:px-16 xl:px-56 w-full">
        <h2 class="text-5xl font-light pb-8 uppercase">galerie</h2>

        <div class="grid grid-cols-12 grid-flow-row gap-y-4 md:gap-x-4">
          <a
            :href="image"
            class="
              group
              flex
              justify-center
              items-center
              col-span-12
              md:col-span-4
              relative
            "
            v-for="image in images"
            :key="image"
          >
            <div
              class="absolute opacity-0 group-hover:opacity-100 duration-300"
            >
              <svg
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.3333 43.6667C34.1154 43.6667 43.6667 34.1154 43.6667 22.3333C43.6667 10.5513 34.1154 1 22.3333 1C10.5513 1 1 10.5513 1 22.3333C1 34.1154 10.5513 43.6667 22.3333 43.6667Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M48.9999 49L37.3999 37.4"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div
              class="
                bg-white bg-opacity-0
                duration-500
                absolute
                w-full
                h-full
                group-hover:bg-opacity-20
              "
            ></div>
            <img
              class="
                w-96
                h-96
                outline-offset-[-12px]
                object-cover
                group-hover:outline-white
                outline-1 outline outline-transparent
                duration-300
                z-10
              "
              :alt="image"
              :src="image"
            />
          </a>
        </div>
      </div>
    </div>

    <div class="container mx-auto px-8 py-12 md:px-16 xl:px-56 w-full">
      <div class="flex flex-row justify-between items-center">
        <div class="flex flex-row px-8 md:hidden" @click="moveLeft()">
          <svg
            width="13"
            class=""
            height="13.5"
            viewBox="0 0 24 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.1116 38.3636L2 20.1818L21.1116 2"
              stroke="black"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div class="flex flex-row w-full justify-center">
          <a href="https://autocartichy.cz/">
            <img
              class="
                md:hidden
                grayscale-0
                hover:grayscale
                transition-all
                duration-500
                ease-in
                w-auto
                opacity-100
              "
              alt="autocar tichy"
              src="https://autocartichy.cz/wp-content/themes/autocartichy/_/img/logo.png"
            />
          </a>
          <a href="https://autocartichy.cz/">
            <img
              class="
                md:hidden
                grayscale-0
                hover:grayscale
                transition-all
                duration-500
                ease-in
                w-0
                opacity-0
              "
              alt="autocar tichy"
              src="https://autocartichy.cz/wp-content/themes/autocartichy/_/img/logo.png"
            />
          </a>
          <a
            href="https://autocartichy.cz/"
            class="md:flex w-1/2 justify-start hidden"
          >
            <img
              class="
                hidden
                md:block
                grayscale-0
                hover:grayscale
                transition-all
                duration-500
                ease-in
              "
              alt="autocar tichy"
              src="https://autocartichy.cz/wp-content/themes/autocartichy/_/img/logo.png"
            />
          </a>
          <a
            href="https://autocartichy.cz/"
            class="md:flex w-1/2 justify-end hidden"
          >
            <img
              class="
                md:block
                grayscale-0
                hover:grayscale
                transition-all
                duration-500
                ease-in
              "
              alt="autocar tichy"
              src="https://autocartichy.cz/wp-content/themes/autocartichy/_/img/logo.png"
            />
          </a>
        </div>
        <div class="flex flex-row px-8 md:hidden" @click="moveRight()">
          <svg
            width="7"
            height="13.5"
            viewBox="0 0 24 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.00021 2L21.1118 20.1818L2.00021 38.3636"
              stroke="black"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
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
import Slider from "@/components/Slider.vue";
import Rezervace from "../components/Rezervace.vue";

export default {
  name: "Home",
  components: { Slider, Rezervace },
  data() {
    return {
      reklamaInt: 1,
    };
  },
  methods: {
    moveLeft() {
      switch (this.reklamaInt) {
        case 1:
          this.reklamaInt = 2;
          break;
        case 2:
          this.reklamaInt--;
          break;

        default:
          break;
      }
    },
    moveRight() {
      console.log("C");
      switch (this.reklamaInt) {
        case 1:
          this.reklamaInt++;
          break;
        case 2:
          this.reklamaInt = 1;
          break;

        default:
          break;
      }
    },
  },
  computed: {
    images() {
      const path = require.context("./../assets/", true, /\.jpg$/);
      return path
        .keys()
        .map(path)
        .sort(() => 0.5 - Math.random())
        .slice(0, 12);
    },
  },
};
</script>
