<template>
    <div :class="['tile', data.title]">
        <router-link tag="div" class="navItem" to="/about">
          <a>About</a>
        </router-link>
        <div class="navItem" v-for="item in data.content" :key="item">
          <router-link :to="{ path: `${item}` }">{{ item }}</router-link>
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
