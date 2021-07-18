var app = new Vue({
  el: '#app',
  data: {
    city: '',
    weatherList: []
  },
  // http://wthrcdn.etouch.cn/weather_mini
  methods: {
    searchWeather: function() {
      axios.get('http://wthrcdn.etouch.cn/weather_mini?city='+this.city)
      .then((response => {
        this.weatherList = response.data.data.forecast;
      }))
      .catch((err) => {})
    },
    changeCity: function(city) {
      this.city = city;
      this.searchWeather();
    }
  }
})