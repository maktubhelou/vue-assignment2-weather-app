<template>
    <div :class="['tile', data.title]">
        <div class="navItem" v-for="item in data.content" :key="item">
          <div @click="changeCity(item)">  {{ item }} </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Nav',
  props: [ 'data', 'changeCity' ]
}
</script>

<style scoped>

</style>
