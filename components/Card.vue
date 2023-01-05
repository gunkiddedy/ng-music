<template>
  <div class="card flex flex-col space-y-3">
    <div 
      v-for="(content, idx) in contents" 
      :key="idx"
      class="card-music bg-white rounded-[10px] flex p-2 shadow-md min-w-[310px]">
      <div class="left-img">
        <img class="w-[100px] h-[100px] rounded-[10px]" :src="content.artworkUrl100" alt="">
      </div>
      <div class="right flex flex-col justify-between pl-2 w-3/4">
        <div class="top">
          <div class="title text-[10px] text-[#334155] font-medium mb-1">
            {{ content.artistName }}
          </div>
          <div class="title2 text-sm text-[#334155] max-w-[125px] font-bold leading-none">
            {{ content.trackName }}
          </div>
        </div>

        <div class="bottom flex items-center justify-between w-full">
          <button class="bg-[#10b981] rounded-[10px] min-w-[45px] px-4 h-5 text-white text-[10px]">
            {{ content.primaryGenreName }}
          </button>
          <div class="price flex items-center space-x-1">
            <img :src="require('../assets/currency-dollar.svg')" alt="logo">
            <span class="text-xs text-[#f5b014]">{{ content.trackPrice }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    contents: {
      type: [Array, Object],
      default: () => {},
    } 
  }
}
</script>