<template>
  <div class="index">
    <div class="home bg-gradient-to-b from-[#712bda] to-[#a45deb] min-w-full min-h-screen flex flex-col justify-center items-center">
      <Logo />
      <div class="search absolute bottom-12 inset-x-0 flex flex-col items-center space-y-4">
        <input 
          class="text-xs font-medium text-center px-8 text-gray-500 rounded-[20px] w-[280px] h-10 focus:outline-none" 
          type="search"
          ref='focusMe'
          v-model="param"
          @keyup.enter="handleSearch"
          placeholder="Artist / Album / Title">

        <button 
        :class="param.length < 3 ? 'cursor-not-allowed' : 'cursor-pointer'"
          class="rounded-[20px] bg-[#ffffff33] text-white text-sm font-medium w-[280px] h-10"
          @click="handleSearch"
          :disabled="param.length < 3">
          Search
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    param: ''
  }),
  mounted() {
    let self = this
    this.$nextTick().then(() => {
      self.$refs.focusMe.focus()
    })
  },
  methods: {
    async handleSearch() {
      const param = this.param
      const content = await this.$store.dispatch('content/fetchContent', param)
      if(content) {
        this.$router.push('result')
      }
    }
  }
}
</script>

<style>

</style>
