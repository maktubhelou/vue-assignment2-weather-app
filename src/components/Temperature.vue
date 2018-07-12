<template>
    <div :class="['tile', data.title]">
        {{ data.content }}
    </div>
</template>

<script>
export default {
  name: 'Temperature',
  props: [ 'data' ]
}
</script>

<style scoped>

</style>
