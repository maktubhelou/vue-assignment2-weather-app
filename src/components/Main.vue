<template>
  <div>
    <div class="grid">
      <!-- <div v-for="item in tiles" :key='item.title' :class="['tile', item.title]">
        {{ item.content }}
      </div> -->
      <DateTime :data="tiles.datetime"/>
      <Animation :data="tiles.weather" />
      <Temperature :data="tiles.temperature"/>
      <Location :data="tiles.location"/>
      <Description :data="tiles.description"/>
    </div>
  </div>
</template>

<script>
import DateTime from '@/components/DateTime'
import Animation from '@/components/Animation'
import Temperature from '@/components/Temperature'
import Location from '@/components/Location'
import Description from '@/components/Description'

export default {
  name: 'Main',
  components: { DateTime, Animation, Temperature, Location, Description },
  data () {
    return {
      greetingmsg: 'Welcome to Weatherly!',
      tiles: {
        datetime: {
          title: 'leftTop',
          content: {
            date: new Date().toLocaleDateString(),
            time: new Date().toLocaleTimeString()
          }
        },
        weather: {
          title: 'center',
          content: 'Current Weather'
        },
        temperature: {
          title: 'rightTop',
          content: '24 deg'
        },
        location: {
          title: 'leftBottom',
          content: ''
        },
        description: {
          title: 'rightBottom',
          content: 'Sunny with clear skies'
        }
      },
      apiData: {}
    }
  },
  mounted () {
    let self = this
    let api = 'https://api.openweathermap.org/data/2.5/find?q=Stockholm&units=metric&appid=dfe15a41201d660911d013203832e676'
    fetch(api).then(function (response) {
      return response.json()
    }).then(function (result) {
      self.apiData = result
      self.tiles.location.content = result.list[0].name
      self.tiles.temperature.content = Math.floor(result.list[0].main.temp)
      self.tiles.description.content = result.list[0].weather[0].description
      self.tiles.datetime.content.date = Date(result.list[0].dt).toLocaleDateString()
      self.tiles.datetime.content.time = Date(result.list[0].dt).toLocaleTimeString()
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
