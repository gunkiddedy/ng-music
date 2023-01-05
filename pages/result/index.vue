<template>
  <div>
    <Navbar />
    <div class="result min-w-full min-h-screen bg-[#f8fafc] flex flex-col items-center">
  
      <p class="result-title text-sm text-[#334155] my-8">
        Search result for : <span class="text-[#7b34dd] font-bold text-lg">{{ param }}</span>
      </p>

      <Card :contents="contents"/>

      <div v-if="!contents.length" class="no-content text-xl text-gray-600 font-bold text-center">
        Oops...! No data found for this search!
      </div>
  
      <div v-if="contents.length" class="bottom-button mt-4">
        <button class="loadmore bg-[#e2e8f0] rounded-[17px] w-[120px] h-[34px] text-[#64748b] text-xs font-medium">
          Load More
        </button>
      </div>
    </div>
    <Modal />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  async asyncData({ store }) {
    const param = store.getters['content/getParam']   
    await store.dispatch('content/fetchContent', param)
  },
  computed: {
    ...mapGetters({
      contents: 'content/getContent',
      param: 'content/getParam'
    }),
  },
}
</script>

<style>

</style>
