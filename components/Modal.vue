<template>
  <transition
    name="fade"
    appear
  >
    <div
      v-if="showModal"
      class="fixed z-30 inset-0 ">
      <div class="h-full w-full bg-[#1c1c2de6] opacity-95 flex items-center justify-center" :class="!showModal ? 'hidden' : ''" />
      <div class="modal-container w-full fixed h-full min-h-screen left-0 top-0 flex items-center justify-center z-40 px-3">
        <button
          class="absolute right-3 md:right-10 top-6"
          @click="closeModal">
          <BaseImage
            file-name="close.svg"
            alt="close"
          />
        </button>
        <div class="modal-body transition-opacity max-w-[960px] relative z-50">
          <div class="search bottom-12 inset-x-0 flex flex-col items-center space-y-4">
            <div class="title text-white text-xl font-bold mb-1">
              Search
            </div>
            <input 
              class="text-xs font-medium text-center px-8 text-gray-500 rounded-[20px] w-[280px] h-10 focus:outline-none" 
              type="search"
              ref='focusMe'
              v-model="param"
              @keyup.enter="handleSearch"
              placeholder="Artist / Album / Title">

            <button 
              :class="param.length < 3 ? 'cursor-not-allowed' : 'cursor-pointer'"
              class="rounded-[20px] text-white text-sm font-medium w-[280px] h-10 bg-gradient-to-b from-[#712bda] to-[#a45deb]"
              :disabled="param.length < 3"
              type="submit"
              @click="handleSearch">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data: () => ({
    param: ''
  }),
  computed: {
    ...mapGetters({
      isOpen: 'modal/getSearchModal',
    }),
    showModal() {
      return this.isOpen
    },
  },
  watch: {
    isOpen() {
      if(this.isOpen === true) {
        let self = this
        this.$nextTick().then(() => {
          self.$refs.focusMe.focus()
        })
      }
    }
  },
  methods: {
    async handleSearch() {
      const param = this.param || 'michael'
      const content = await this.$store.dispatch('content/fetchContent', param)
      if(content) {
        this.$router.push('result')
        this.$store.dispatch('modal/setSearchModal', false)
      }
    },
    closeModal() {
      this.$store.dispatch('modal/setSearchModal', false)
    }
  },
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  @apply transition-opacity duration-300;
}
.fade-enter,
.fade-leave-active {
  @apply opacity-0;
}
</style>