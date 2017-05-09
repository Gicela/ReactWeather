var React = require('react');

var About = (props) => {
        return(
            <div>
                <h1 className="text-center page-title">About</h1>
                 <p>This is a weather application React app</p>
                 <p>Here are some of the tools used:</p>
                 <ul>
                     <li>
                         <a href="https://facebook.com.github.io/react">React </a> -- Framework used
                     </li>
                     <li>
                        <a href="http:openweathermap.org">Open Weather Map</a>
                         </li>
                     </ul>
            </div>
        );
}
module.exports = About;
