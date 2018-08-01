<template>
    <div :class="['tile', data.title]">
        <!-- @ TODO display correct timezone -->
        {{ data | moment("dddd, MMMM Do") }}
        {{ date | moment("hh:mm:ss") }}
    </div>
</template>

<script>
import Vue from 'vue'

Vue.use(require('vue-moment'))

export default {
  name: 'DateTime',
  props: [ 'data' ],
  data () {
    return {
      date: new Date()
    }
  },
  methods: {
    setDate () {
      this.date = new Date()
    },
    getDate () {
      setInterval(this.setDate, 1000)
    }
  }
}
</script>

<style scoped>

</style>
