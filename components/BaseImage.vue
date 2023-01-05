<template>
  <img 
    v-if="fileUrl"
    :src="fileUrl" 
    :alt="alt" 
  />
</template>

<script>
export default {
  props: {
    fileName: {
      type: String,
      default: ''
    },
    alt: {
      type: String,
      default: ''
    }
  },
  computed: {
    fileUrl() {
      if(!this.fileName) return null
      const file = this.fileName.trim()
      const randomNumber = Math.floor(Math.random() * 1000)
      
      if(file.indexOf("http") === 0) return `${file}?cachebust=${randomNumber}`
      if(file.indexOf("data:image") === 0) return file
      
      return require(`@/assets/img/${ file }`)
    }
  }
}
</script>