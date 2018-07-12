<template>
    <div :class="['tile', data.title]">
        {{ data.content.date }}
        {{ data.content.time }}
    </div>
</template>

<script>
export default {
  name: 'DateTime',
  props: [ 'data' ]
}
</script>

<style scoped>

</style>
