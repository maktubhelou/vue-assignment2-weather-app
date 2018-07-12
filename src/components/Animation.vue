<template>
    <div :class="['tile', data.title]">
        <img src="@/assets/img/weather.svg" />
    </div>
</template>

<script>
export default {
  name: 'Animation',
  props: [ 'data' ]
}
</script>

<style scoped>

</style>
