<template>
  <div class="app">
    <div :class="currentTime">
      <div class="top">
        <div class="city">Tehran IR</div>
        <div class="date">{{day}} , {{date.getDate()}} {{month}} {{date.getFullYear()}}</div>
      </div>
      <div class="middle">
        <div class="temps">
          <div class="temp">{{currentTemp}}</div>
          <div class="temp_right">
            <div class="temp_scale">
              <span>&deg;C</span>
            </div>
            <div class="high">
              <img src="./assets/high.svg">
              {{maxTemp}} &deg;
            </div>
            <div class="low">
              <img src="./assets/low.svg">
              {{minTemp}} &deg;
            </div>
          </div>
        </div>
      </div>
      <div class="bottom">
        <P>{{overcast}}</P>
        <img :src="require(`./assets/${icon || 1}.svg`)">
      </div>
    </div>
  </div>
</template>

<script>
import { getDay, getMonth, getInlineTheme } from "./helper/time.helper";
// helper
import webliteHandler from "./helper/weblite.api";
// W
const { W } = window;

export default {
  name: "weather-inline",
  data() {
    return {
      currentTemp: "",
      minTemp: "",
      maxTemp: "",
      overcast: "",
      icon: "",
      isDay: true,
      // city: '',
      // country: '',
      day: "",
      month: "",
      date: new Date()
    };
  },
  created() {
    this.day = getDay();
    this.month = getMonth();

    W && webliteHandler(this);
  },
  methods: {
    getWeather() {}
  },
  computed: {
    currentTime() {
      return getInlineTheme(this.date, this.isDay, "card");
    }
  }
};
</script>

<style>
.app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* width: 250px; */
  height: 100%;
  display: flex;
  overflow: hidden;
}

.temps {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.temp {
  color: rgba(255, 255, 255, 0.75);
  font-family: "Open Sans";
  font-size: 96px;
}

.temp_right {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.temp_scale {
  padding-top: 5px;
  color: rgba(255, 255, 255, 0.75);
  font-family: "Open Sans";
  font-size: 26px;
}

.high {
  padding-top: 5px;
  font-family: Segoe UI;
  font-size: 15px;
  color: rgba(255, 255, 255, 0.75);
}

.high img {
  vertical-align: middle;
}

.low {
  font-family: Segoe UI;
  font-size: 15px;
  color: rgba(255, 255, 255, 0.75);
}

.low img {
  vertical-align: middle;
  margin-left: -10px;
}

.city {
  font-family: Segoe UI;
  font-size: 30px;
  text-align: center;
  color: white;
}

.date {
  color: white;
  font-family: roboto;
  font-weight: 100;
  text-align: center;
  font-size: 20px;
}

.card-day {
  background: #1fb1ce;
  height: 250px;
  width: 250px;
  border-radius: 10px;
  margin: auto;
}

.card-night {
  background: #484f60;
  height: 250px;
  width: 250px;
  border-radius: 10px;
  margin: auto;
}

.top {
  margin-top: 5px;
}

.middle {
  margin-top: 5px;
}

.bottom {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.bottom img {
  width: 120px;
  height: 120px;
  margin: -45px auto;
}

.bottom p {
  text-align: center;
  font-family: roboto;
  font-size: 20px;
  color: white;
  margin-top: 0;
  margin-bottom: 15px;
}
</style>