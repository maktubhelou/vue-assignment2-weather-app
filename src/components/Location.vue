<template>
    <div :class="['tile', data.title]">
        {{ data.content }}
    </div>
</template>

<script>
export default {
  name: 'Location',
  props: [ 'data' ]
}
</script>

<style scoped>

</style>
