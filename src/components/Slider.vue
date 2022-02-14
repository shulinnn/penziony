<template>
  <div class="mx-auto h-64 md:h-144">
    <div class="flex h-full relative">
      <!-- slider controls -->

      <div class="w-full h-full flex justify-center flex-col absolute z-10">
        <!-- left controls -->

        <div
          class="
            ml-4
            bg-picovina
            flex flex-col
            justify-center
            items-center
            h-12
            w-12
          "
          @click="moveLeft()"
        >
          <svg
            width="14"
            class=""
            height="27"
            viewBox="0 0 24 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.1116 38.3636L2 20.1818L21.1116 2"
              stroke="white"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <!-- left controls end -->

        <!-- right controls -->

        <div
          class="
            right-0
            absolute
            mr-4
            bg-picovina
            flex flex-col
            justify-center
            items-center
            h-12
            w-12
          "
          @click="moveRight()"
        >
          <svg
            width="14"
            height="27"
            viewBox="0 0 24 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.00021 2L21.1118 20.1818L2.00021 38.3636"
              stroke="white"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <!-- right controls end -->
      </div>

      <!-- slider controls end-->
      <!-- slides -->
      <div class="flex w-full h-full overflow-hidden relative" id="slider">
        <img
          id="slide1"
          class="w-full object-cover"
          v-if="sliderInt == 1"
          :src="require('@/assets/' + images[0])"
        />
        <img
          id="slide2"
          class="w-full object-cover"
          v-if="sliderInt == 2"
          :src="require('@/assets/' + images[1])"
        />
        <img
          id="slide3"
          class="w-full object-cover"
          v-if="sliderInt == 3"
          :src="require('@/assets/' + images[2])"
        />
      </div>
      <!-- slides end -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sliderInt: 1,
      images: [
        "slider/1.jpg",
        "slider/2.jpg",
        "slider/3.jpg",
      ],
    };
  },
  methods: {
    moveLeft: function () {
        switch (this.sliderInt) {
            case 1:
                this.sliderInt = 3;
                break;
            case 2:
                this.sliderInt--;
                break;
            case 3:
                this.sliderInt--;
                break;
        
            default:
                break;
        }
    },
    moveRight: function () {
      switch (this.sliderInt) {
        case 1:
          this.sliderInt++;
          break;
        case 2:
          this.sliderInt++;
          break;
        case 3:
          this.sliderInt = 1;
          break;

        default:
          break;
      }
    },
  },
};
</script>

<style scoped>
</style>