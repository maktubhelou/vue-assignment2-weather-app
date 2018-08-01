<template>
    <div :class="['tile', data.title]">
        <!-- {{weatherStyles}} -->
        <svg id="main" version="1" viewBox="0 0 1000 1000" :class="weatherStyles">
        <g id="Backgound">
            <circle id="XMLID_2229_" cx="500" cy="498" r="314" class="sky"/>
        </g>
             <g id="Sun">
                    <g id="Sun-Bright">
                        <g id="XMLID_9_">
                        <circle id="XMLID_11_" cx="507" cy="311" r="71" class="st4"/>
                        <circle id="XMLID_10_" cx="507" cy="311" r="27" class="st0"/>
                        </g>
                    </g>
                    <g id="Sun-Cloudy">
                        <circle id="XMLID_53_" cx="641" cy="358" r="50" class="sun"/>
                    </g>
                    <g id="Sun-snowy">
                        <circle id="Sun-snow-sun" cx="652" cy="329" r="50" class="st1"/>
                    </g>
                    <g id="Sun-rainy">
                    <circle id="XMLID_98_" cx="646" cy="367" r="50" class="sun"/>
                    </g>
                </g>
        <g id="Foreground">
            <g id="ground-main">
            <g id="ground">
                <g id="dark-ground">
                <path id="XMLID_46_" d="M500 812c152 0 279-108 308-252H192a315 315 0 0 0 308 252z" class="st1"/>
                </g>
                <g id="light-ground">
                <path id="XMLID_44_" d="M808 560L267 708c30 33 66 60 108 78l433-226z" class="st2"/>
                <path id="XMLID_41_" d="M808 560L579 802a315 315 0 0 0 229-242z" class="st2"/>
                <path id="XMLID_38_" d="M808 560H192c4 19 9 37 17 55l599-55z" class="st2"/>
                </g>
            </g>
            </g>
            <g id="House-and-Trees">
            <path id="bush" d="M808 560v-5a22 22 0 0 0-27-22 20 20 0 0 0-30-16 25 25 0 0 0-48 7v36h105z" class="st1"/>
            <path id="house-frame" fill="#fcfbed" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M589 496h129v65H589z"/>
            <path id="roof" d="M589 496l66-45 63 45z" class="st4"/>
            <path id="window-left" d="M612 517h15v15h-15z" class="st0"/>
            <path id="window-right" d="M640 517h16v15h-16z" class="st0"/>
            <path id="door" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M682 530h14v30h-14z"/>
            <path id="tree-brances" d="M579 498h-1a21 21 0 0 0-12-37h-1l2-9c0-11-10-20-21-20h-9c-11 0-20 9-20 20l2 9h-2c-11 0-20 8-20 19-1 8 3 14 9 18h-1c-10 0-19 7-21 17-2 13 8 24 20 24h75c13 0 22-11 20-24-1-10-10-17-20-17z" class="st1"/>
            <path id="tree-trunk" d="M564 520l-11 9v-9h-6v14l-5 5h-6v21h15v-20l18-15z" class="st0"/>
            </g>
            </g>
            <g id="CloudPatterns">
                <g id="Clouds-sunny">
                    <g id="XMLID_8_">
                        <path id="XMLID_24_" d="M668 296c3-11 12-16 22-16l11 2c3 2 7 1 9-2 6-9 16-14 28-14 17 0 32 12 33 30H668z" class="st6"/>
                        <g id="XMLID_22_">
                        <path id="XMLID_23_" d="M337 410c-13 0-25 6-32 15-4 5-10 8-16 6l-6-1c-8 0-14 4-19 9-4-3-9-5-14-5-10 0-19 7-21 17h148c0-23-18-41-40-41z" class="st6"/>
                        </g>
                        <g id="XMLID_20_">
                        <path id="XMLID_21_" d="M346 222c-14 0-26 7-35 18-4 5-10 8-16 7h-5c-6 0-13 2-18 7-3 3-7 4-11 3l-5-1c-9 0-17 8-19 18h154c0-29-20-52-45-52z" class="st6"/>
                        </g>
                        <path id="XMLID_19_" d="M210 310h93" class="st7"/>
                        <path id="XMLID_17_" d="M324 310h27" class="st7"/>
                        <path id="XMLID_16_" d="M314 473h129" class="st7"/>
                        <path id="XMLID_14_" d="M300 473h-17" class="st7"/>
                        <path id="XMLID_13_" d="M795 317H682" class="st7"/>
                        <path id="XMLID_12_" d="M648 317h13" class="st7"/>
                    </g>
                </g>
                <g id="Clouds-cloudy">
                    <g id="XMLID_1977_">
                    <path id="XMLID_2205_" d="M522 340c3-11 12-16 22-16l11 2c4 2 7 1 9-2 6-9 17-14 28-14 18 0 32 12 34 30H522z" class="clouds"/>
                    <g id="XMLID_2203_">
                        <path id="XMLID_2204_" d="M428 220c-13 0-25 6-32 15-4 5-10 7-16 6l-6-1c-8 0-14 4-19 9-4-3-9-5-14-5-10 0-19 7-21 17h148c0-23-18-41-40-41z" class="clouds"/>
                    </g>
                    <g id="XMLID_2190_">
                        <path id="XMLID_2191_" d="M494 384a78 78 0 0 0-154-18 65 65 0 0 0-73 13c-7 7-17 9-26 6a43 43 0 0 0-55 24h304c3-8 4-16 4-25z" class="clouds"/>
                    </g>
                    <path id="XMLID_2187_" d="M823 446a92 92 0 1 0-166-46c-8-3-15-4-24-4-18 0-35 7-47 20-9 9-21 12-33 10l-8-1c-15 0-29 9-36 21h314z" class="clouds"/>
                    <path id="XMLID_2187_" d="M543 499a92 92 0 1 0-166-46c-8-3-15-4-24-4-18 0-35 7-47 20-9 9-21 12-33 10l-8-1c-15 0-29 9-36 21h314z" class="clouds"/>
                    <g id="XMLID_2185_">
                        <path id="XMLID_2186_" d="M383 391c-17 0-32 7-42 19-4 5-12 8-19 7a34 34 0 0 0-27 8c-4 3-9 4-14 3l-6-1c-11 0-21 8-23 19h186c-1-30-25-55-55-55z" class="clouds"/>
                        <path id="XMLID_2186_" d="M583 421c-17 0-32 7-42 19-4 5-12 8-19 7a34 34 0 0 0-27 8c-4 3-9 4-14 3l-6-1c-11 0-21 8-23 19h186c-1-30-25-55-55-55z" class="clouds"/>
                    </g>
                    </g>
                </g>
                <g id="Wind-cloudy">
                    <g id="XMLID_33_">
                    <path id="XMLID_43_" d="M219 523h136a21 21 0 0 0 0-42h-2c-11 0-21 10-21 21" class="wind"/>
                    <path id="XMLID_42_" d="M198 544h230a21 21 0 0 0 0-42h-1c-12 0-21 10-21 21" class="wind"/>
                    <path id="XMLID_41_" d="M161 533h116" class="wind"/>
                    <path id="XMLID_40_" d="M301 533h32" class="wind"/>
                    <path id="XMLID_39_" d="M542 456h162c10 0 19-8 19-19 0-10-9-19-19-19h-1c-11 0-20 9-20 19" class="wind"/>
                    <path id="XMLID_38_" d="M333 322h162c11 0 19-8 19-19s-8-19-19-19h-1c-11 0-19 8-19 19" class="wind"/>
                    <path id="XMLID_37_" d="M476 467h156" class="wind"/>
                    <path id="XMLID_36_" d="M654 467h31" class="wind"/>
                    <path id="XMLID_35_" d="M371 333h82" class="wind"/>
                    <path id="XMLID_34_" d="M290 333h50" class="wind"/>
                    </g>
                </g>
                <g id="Clouds-snowy">
                    <path id="XMLID_26_" d="M670 316c4-15 17-23 31-23 6 0 11 1 16 4 4 2 10 1 12-3a48 48 0 0 1 87 22H670z" class="st2"/>
                    <g id="XMLID_24_">
                    <path id="XMLID_25_" d="M499 194c-13 0-24 6-32 15-3 5-10 8-16 6l-5-1c-8 0-15 4-19 9-4-3-9-5-14-5-11 0-19 7-21 17h148c0-23-18-41-41-41z" class="st2"/>
                    </g>
                    <g id="XMLID_22_">
                    <path id="XMLID_23_" d="M350 312c-22 0-42 9-55 25-7 8-16 11-26 10a45 45 0 0 0-36 10c-6 4-12 6-19 4a31 31 0 0 0-39 24h249c0-40-33-73-74-73z" class="st2"/>
                    </g>
                </g>
                <g id="Lightning">
                    <path id="XMLID_1962_" d="M352 442l-19 22h23l-23 35 53-40h-31l21-17z" class="lightning"/>
                </g>
                <g id="Snow">
                    <g id="Snow-left">
                    <circle id="XMLID_2058_" cx="226" cy="406" r="5" class="snow"/>
                    <circle id="XMLID_2057_" cx="253" cy="406" r="5" class="snow"/>
                    <circle id="XMLID_2056_" cx="280" cy="406" r="5" class="snow"/>
                    <circle id="XMLID_2055_" cx="307" cy="406" r="5" class="snow"/>
                    <circle id="XMLID_2062_" cx="333" cy="406" r="5" class="snow"/>
                    <circle id="XMLID_2061_" cx="360" cy="406" r="5" class="snow"/>
                    <circle id="XMLID_2060_" cx="387" cy="406" r="5" class="snow"/>
                    <circle id="XMLID_3206_" cx="226" cy="442" r="5" class="snow"/>
                    <circle id="XMLID_3205_" cx="253" cy="442" r="5" class="snow"/>
                    <circle id="XMLID_3204_" cx="280" cy="442" r="5" class="snow"/>
                    <circle id="XMLID_3203_" cx="307" cy="442" r="5" class="snow"/>
                    <circle id="XMLID_3202_" cx="333" cy="442" r="5" class="snow"/>
                    <circle id="XMLID_3201_" cx="360" cy="442" r="5" class="snow"/>
                    <circle id="XMLID_3196_" cx="387" cy="442" r="5" class="snow"/>
                    <circle id="XMLID_2072_" cx="241" cy="425" r="5" class="snow"/>
                    <circle id="XMLID_2071_" cx="268" cy="425" r="5" class="snow"/>
                    <circle id="XMLID_2070_" cx="295" cy="425" r="5" class="snow"/>
                    <circle id="XMLID_2069_" cx="322" cy="425" r="5" class="snow"/>
                    <circle id="XMLID_2068_" cx="348" cy="425" r="5" class="snow"/>
                    <circle id="XMLID_2067_" cx="375" cy="425" r="5" class="snow"/>
                    </g>
                    <g id="Snow-middle">
                    <circle id="XMLID_51_" cx="413" cy="254" r="5" class="snow"/>
                    <circle id="XMLID_50_" cx="440" cy="254" r="5" class="snow"/>
                    <circle id="XMLID_49_" cx="466" cy="254" r="5" class="snow"/>
                    <circle id="XMLID_48_" cx="493" cy="254" r="5" class="snow"/>
                    <circle id="XMLID_47_" cx="520" cy="254" r="5" class="snow"/>
                    <circle id="XMLID_46_" cx="428" cy="273" r="5" class="snow"/>
                    <circle id="XMLID_45_" cx="455" cy="273" r="5" class="snow"/>
                    <circle id="XMLID_44_" cx="481" cy="273" r="5" class="snow"/>
                    <circle id="XMLID_43_" cx="508" cy="273" r="5" class="snow"/>
                    </g>
                    <g id="Snow-right">
                    <circle id="XMLID_3195_" cx="693" cy="331" r="5" class="snow"/>
                    <circle id="XMLID_3194_" cx="720" cy="331" r="5" class="snow"/>
                    <circle id="XMLID_3189_" cx="746" cy="331" r="5" class="snow"/>
                    <circle id="XMLID_3187_" cx="773" cy="331" r="5" class="snow"/>
                    <circle id="XMLID_3186_" cx="800" cy="331" r="5" class="snow"/>
                    <circle id="XMLID_3211_" cx="692" cy="366" r="5" class="snow"/>
                    <circle id="XMLID_3210_" cx="719" cy="366" r="5" class="snow"/>
                    <circle id="XMLID_3209_" cx="745" cy="366" r="5" class="snow"/>
                    <circle id="XMLID_3208_" cx="772" cy="366" r="5" class="snow"/>
                    <circle id="XMLID_3207_" cx="799" cy="366" r="5" class="snow"/>
                    <circle id="XMLID_3185_" cx="708" cy="350" r="5" class="snow"/>
                    <circle id="XMLID_3184_" cx="735" cy="350" r="5" class="snow"/>
                    <circle id="XMLID_3183_" cx="761" cy="350" r="5" class="snow"/>
                    <circle id="XMLID_3177_" cx="788" cy="350" r="5" class="snow"/>
                    </g>
                </g>
                <g id="Clouds-rainy">
                    <g id="XMLID_22_">
                    <g id="XMLID_82_">
                        <path id="XMLID_96_" d="M621 405l-75 195" class="st3"/>
                        <path id="XMLID_95_" d="M596 426l-67 174" class="st3"/>
                        <path id="XMLID_94_" d="M579 426l-67 174" class="st3"/>
                        <path id="XMLID_93_" d="M639 405l-75 195" class="st3"/>
                        <path id="XMLID_92_" d="M657 405l-75 195" class="st3"/>
                        <path id="XMLID_91_" d="M675 405l-75 195" class="st3"/>
                        <path id="XMLID_90_" d="M693 405l-75 195" class="st3"/>
                        <path id="XMLID_89_" d="M711 405l-75 195" class="st3"/>
                        <path id="XMLID_88_" d="M729 405l-75 195" class="st3"/>
                        <path id="XMLID_87_" d="M747 405l-75 195" class="st3"/>
                        <path id="XMLID_86_" d="M765 405l-74 195" class="st3"/>
                        <path id="XMLID_85_" d="M783 405l-74 195" class="st3"/>
                        <path id="XMLID_84_" d="M801 405l-74 195" class="st3"/>
                        <path id="XMLID_83_" d="M819 405l-74 195" class="st3"/>
                    </g>
                    <path id="XMLID_81_" d="M538 336c3-11 12-16 22-16l11 2c4 2 7 1 9-2 6-9 17-14 28-14 18 0 32 12 34 30H538z" class="st4"/>
                    <g id="XMLID_79_">
                        <path id="XMLID_80_" d="M444 216c-13 0-25 6-32 15-4 5-10 7-16 6l-6-1c-8 0-14 4-19 9-4-3-9-5-14-5-10 0-19 7-21 17h148c0-23-18-41-40-41z" class="st4"/>
                    </g>
                    <path id="XMLID_78_" d="M272 405l-75 195" class="st3"/>
                    <path id="XMLID_77_" d="M255 405l-63 163" class="st3"/>
                    <path id="XMLID_76_" d="M290 405l-75 195" class="st3"/>
                    <path id="XMLID_75_" d="M308 405l-75 195" class="st3"/>
                    <path id="XMLID_74_" d="M326 405l-75 195" class="st3"/>
                    <path id="XMLID_73_" d="M344 405l-75 195" class="st3"/>
                    <path id="XMLID_72_" d="M362 405l-75 195" class="st3"/>
                    <path id="XMLID_71_" d="M380 405l-74 195" class="st3"/>
                    <path id="XMLID_70_" d="M398 405l-74 195" class="st3"/>
                    <path id="XMLID_69_" d="M416 405l-74 195" class="st3"/>
                    <path id="XMLID_68_" d="M434 405l-74 195" class="st3"/>
                    <g id="XMLID_66_">
                        <path id="XMLID_67_" d="M510 380a78 78 0 0 0-154-18 65 65 0 0 0-73 13c-7 7-17 9-26 6a43 43 0 0 0-55 24h304c3-8 4-16 4-25z" class="st4"/>
                    </g>
                    <path id="XMLID_65_" d="M452 405l-74 195" class="st3"/>
                    <path id="XMLID_64_" d="M470 405l-74 195" class="st3"/>
                    <path id="XMLID_63_" d="M839 442a92 92 0 1 0-166-46c-8-3-15-4-24-4-18 0-35 7-47 20-9 9-21 12-33 10l-8-1c-15 0-29 9-36 21h314z" class="st4"/>
                    <g id="XMLID_60_">
                        <path id="XMLID_62_" d="M399 387c-17 0-32 7-42 19-4 5-12 8-19 7a34 34 0 0 0-27 8c-4 3-9 4-14 3l-6-1c-11 0-21 8-23 19h186c-1-30-25-55-55-55z" class="st4"/>
                    </g>
                    </g>
                </g>
            </g>
        </svg>
    </div>
</template>

<script>
import { TimelineMax } from 'greensock'

export default {
  name: 'Animation',
  props: ['data', 'weatherStyles'],
  mounted () {
    // this.getDate()
    let cloudTl = new TimelineMax()
    cloudTl.from('#Clouds-cloudy', 2, { opacity: 0 })
    cloudTl.from('#Clouds-rainy', 2, { opacity: 0 })

    let sunTl = new TimelineMax()
    sunTl.from('#Sun', 6, { 
      rotation: -360,
      transformOrigin: "500px 500px",
    }, 0)
    sunTl.repeat(-1)

    let minuteHandTimeLine = new TimelineMax()
    minuteHandTimeLine.to('#minute-hand', 6, {
      rotation: 360, 
      transformOrigin: "0% 0%",
      ease: Power0.easeNone
    }, 0)
  }
}

</script>

<style scoped>
</style>
