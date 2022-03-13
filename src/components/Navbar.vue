<template>
  <div id="navbar">
    <div class="container mx-auto xl:px-56 md:px-16">
      <div
        class="
          flex flex-col
          items-center
          space-y-4
          md:space-y-0 md:flex-row
          border-b border-black
          justify-between
          border-opacity-30
          py-4
        "
      >
        <div class="flex flex-row items-center h-full px-8 md:px-0 space-x-4">
          <svg
            width="23"
            height="23"
            viewBox="0 0 23 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.7358 16.9006V19.9006C21.7369 20.1791 21.6799 20.4548 21.5683 20.7099C21.4567 20.9651 21.2931 21.1942 21.0879 21.3824C20.8826 21.5707 20.6403 21.7141 20.3765 21.8033C20.1127 21.8925 19.8331 21.9257 19.5558 21.9006C16.4786 21.5662 13.5228 20.5147 10.9258 18.8306C8.5096 17.2952 6.46111 15.2468 4.92577 12.8306C3.23575 10.2218 2.18402 7.25158 1.85577 4.16058C1.83078 3.88405 1.86365 3.60534 1.95227 3.34221C2.0409 3.07907 2.18334 2.83727 2.37054 2.6322C2.55773 2.42714 2.78558 2.26329 3.03956 2.15111C3.29355 2.03892 3.56811 1.98085 3.84577 1.98058H6.84577C7.33108 1.97581 7.80156 2.14766 8.16953 2.46412C8.5375 2.78057 8.77785 3.22003 8.84577 3.70058C8.9724 4.66065 9.20722 5.60331 9.54577 6.51058C9.68032 6.86851 9.70944 7.2575 9.62968 7.63146C9.54992 8.00543 9.36464 8.34869 9.09577 8.62058L7.82577 9.89058C9.24933 12.3941 11.3222 14.467 13.8258 15.8906L15.0958 14.6206C15.3677 14.3517 15.7109 14.1664 16.0849 14.0867C16.4589 14.0069 16.8478 14.036 17.2058 14.1706C18.113 14.5091 19.0557 14.744 20.0158 14.8706C20.5015 14.9391 20.9452 15.1838 21.2623 15.5581C21.5794 15.9324 21.7479 16.4102 21.7358 16.9006Z"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span class="font-light">{{ info.telefon }}</span>
        </div>
        <div class="flex flex-row items-center px-8 md:px-0 space-x-4">
          <svg
            width="23"
            height="19"
            viewBox="0 0 23 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.50049 1.30536H19.5005C20.6005 1.30536 21.5005 2.20536 21.5005 3.30536V15.3054C21.5005 16.4054 20.6005 17.3054 19.5005 17.3054H3.50049C2.40049 17.3054 1.50049 16.4054 1.50049 15.3054V3.30536C1.50049 2.20536 2.40049 1.30536 3.50049 1.30536Z"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M21.5005 3.30536L11.5005 10.3054L1.50049 3.30536"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span class="font-light">{{ info.email }}</span>
        </div>
        <div class="flex flex-row items-center px-8 md:px-0 space-x-4">
          <svg
            width="23"
            height="21"
            viewBox="0 0 23 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.19775 1.17686H7.19775C8.25862 1.17686 9.27604 1.59829 10.0262 2.34844C10.7763 3.09858 11.1978 4.116 11.1978 5.17686V19.1769C11.1978 18.3812 10.8817 17.6182 10.3191 17.0555C9.75647 16.4929 8.9934 16.1769 8.19775 16.1769H1.19775V1.17686Z"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M21.1978 1.17686H15.1978C14.1369 1.17686 13.1195 1.59829 12.3693 2.34844C11.6192 3.09858 11.1978 4.116 11.1978 5.17686V19.1769C11.1978 18.3812 11.5138 17.6182 12.0764 17.0555C12.639 16.4929 13.4021 16.1769 14.1978 16.1769H21.1978V1.17686Z"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <span class="font-light">{{ info.oteviraciDoba }}</span>
        </div>
      </div>
    </div>

    <div class="w-full">
      <div class="container mx-auto xl:px-56 md:px-16 px-8">
        <div
          class="flex flex-row justify-between md:justify-evenly py-8 xl:px-0"
        >
          <div
            class="
              hidden
              md:flex
              flex-row
              space-x-12
              my-auto
              uppercase
              font-medium
            "
          >
            <router-link
              :to="{ name: 'Home' }"
              class="hover:text-darkBrown duration-200"
              >Domů</router-link
            >
            <router-link
              :to="{ name: 'Agape' }"
              class="hover:text-darkBrown duration-200"
              >Agape</router-link
            >
          </div>

          <!-- LOGO -->
          <router-link :to="{ name: 'Home' }">
            <img class="my-auto md:mx-4" src="@/assets/logo.png" />
            </router-link>

          <!-- LOGO END -->

          <div
            class="
              hidden
              ml-0
              md:flex
              flex-row
              space-x-12
              my-auto
              uppercase
              font-medium
            "
          >
            <router-link
              :to="{ name: 'Jecminek' }"
              class="hover:text-darkBrown duration-200"
              >Ječmínek</router-link
            >
            <router-link
              :to="{ name: 'Jecminek2' }"
              class="hover:text-darkBrown duration-200"
              >Ječmínek 2</router-link
            >
          </div>

          <!-- HAMBURGER MENU -->
          <svg
            @click="isOpen = !isOpen"
            xmlns="http://www.w3.org/2000/svg"
            class="my-auto md:hidden"
            v-if="!isOpen"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="my-auto md:hidden"
            @click="isOpen = !isOpen"
            v-if="isOpen"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>

          <!-- HAMBURGER MENU END -->
        </div>
        <div class="w-full container pb-8" v-if="isOpen">
          <ul class="flex flex-col space-y-4">
            <li>
              <router-link
                :to="{ name: 'Home' }"
                class="hover:text-darkBrown duration-200"
                >Domů</router-link
              >
            </li>
            <li>
              <router-link
                :to="{ name: 'Agape' }"
                class="hover:text-darkBrown duration-200"
                >Agape</router-link
              >
            </li>
            <li>
              <router-link
                :to="{ name: 'Jecminek' }"
                class="hover:text-darkBrown duration-200"
                >Ječmínek</router-link
              >
            </li>
            <li>
              <router-link
                :to="{ name: 'Jecminek2' }"
                class="hover:text-darkBrown duration-200"
                >Ječmínek 2</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  computed: {
    info() {
      return this.$store.state.info;
    },
  },
};
</script>

<style scoped>
</style>