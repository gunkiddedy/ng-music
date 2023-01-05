<template>
  <nav class="navbar px-3 h-[60px] flex items-center bg-gradient-to-b from-[#712bda] to-[#a45deb]">
    <div class="container flex flex-wrap items-center justify-between mx-auto">

      <button data-collapse-toggle="navbar-dropdown" type="button" class="inline-flex items-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-dropdown" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <img :src="require('../assets/menu.svg')" alt="logo">
      </button>

      <NuxtLink to="/" class="flex items-center">
        <img :src="require('../assets/ngmusic.svg')" alt="logo">
      </NuxtLink>

      <button @click="showModalSearch">
        <img :src="require('../assets/search.svg')" alt="logo">
      </button>
      
    </div>
  </nav>

</template>

<script>
export default {
  data: () => ({
    showModal: false
  }),
  methods: {
    showModalSearch() {
      this.$store.dispatch('modal/setSearchModal', true)
    },
  },
}
</script>
