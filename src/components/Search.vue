<template>
    <div :class="['tile', data.title]">
        <div class="search">
          <input placeholder="city..." v-model="link">
          <router-link tag="button" :to="{ path: `${link}` }">Go!</router-link>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Nav',
  props: [ 'data', 'changeCity' ],
  data () {
    return {
      link: ''
    }
  }
}
</script>

<style scoped>

</style>
