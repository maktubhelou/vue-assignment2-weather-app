<template>
    <div :class="['tile', data.title]">
        {{ data.content }}
    </div>
</template>

<script>
export default {
  name: 'Description',
  props: [ 'data' ]
}
</script>

<style scoped>

</style>
