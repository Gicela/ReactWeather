var React = require('react');

var WeatherForm = React.createClass({
    render: function(){
        return(
            <div>
                <h1>Get Weather</h1>
                <form>
                    <div>
                         <input type="text" ref="cityName" placeholder="Enter city name"/>
                    </div>
                    <div>
                         <button>Get weather</button>
                    </div>
                </form>

            </div>
        )
    }
});

module.exports = WeatherForm;