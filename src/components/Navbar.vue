<template>
  <nav class="bg-navy border-gray-200 px-2 sm:px-4 py-2.5 rounded">
    <div class="container flex flex-wrap justify-between items-center mx-auto">
      <router-link :to="navLink[0].link" class="flex items-center">
        <span
          class="self-center underline text-xl font-semibold whitespace-nowrap text-white"
        >Make Your Day</span>
      </router-link>
      <button
        id="navbar-default"
        type="button"
        class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
        @click="showMenu()"
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"
          />
        </svg>
      </button>

      <div class="absolute h-screen w-screen left-0 top-14 bg-light_slate z-10 " :class="showMobileMenu ? 'block' : 'hidden'">
        <div class="flex flex-col mx-20 my-20  ">
        <h2 class="text-center underline text-xl mb-5 ">Menu</h2>
        <li
            v-for="(route, index) in navLink"
            :key="index"
            class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:border-0 hover:text-white active:text-light_slate md:p-0 text-gray-400 hover:bg-navy"
          >
            <router-link @click="showMobileMenu = false" class="h-full w-full p-5" :to="route.link">- {{ route.title }}</router-link>
          </li>

        </div>
      </div>
      <div class="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul
          class="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white bg-gray-800 md:bg-gray-900 border-gray-700"
        >
          <li
            v-for="(route, index) in navLink"
            :key="index"
            class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:border-0 hover:text-white active:text-light_slate md:p-0 text-gray-400 hover:bg-navy"
          >
            <router-link class="h-full w-full p-5" :to="route.link">{{ route.title }}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Navbar',
  data() {
    return {
      clicked: false,
      navLink:
        [
          {
            link: "/",
            title: "List",
            description: "",
            date: "1998",
          },

          {
            link: "/tasks/new",
            title: "Create new",
            description: "",
            date: "1999",
          }
        ],
      showMobileMenu: false,
    };
  },
  methods: {
    showMenu() {
      this.showMobileMenu = !this.showMobileMenu;
    },
  }
})
</script>
