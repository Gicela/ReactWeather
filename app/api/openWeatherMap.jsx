var axios = require('axios');

const OPEN_WEATHER_MAP_URL ='http://api.openweathermap.org/data/2.5/weather?appid=f6a1a31c93df21c192cede559773725c&units=metric';
module.exports = {
    getTemp: function(location){
        var econdedLocation = encodeURIComponent(location);
        var requestUrl=`${OPEN_WEATHER_MAP_URL}&q=${econdedLocation}`;

      return axios.get(requestUrl).then(function(res){
            if (res.data.cod && res.data.message){
                throw new Error(res.data.message);
             } else {
                return res.data.main.temp;
            }
        }, function(res){
            throw new Error(res.data.message);
        }); 
    }
}