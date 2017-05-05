var React = require("react");
var {link} = require('react-router');

var Examples = (props)=>{
    return(
        <div>
            <h1 className="text-center">Examples</h1>
            <p>Here are some example locations to try out:</p>
            <ol>
                <li>
                    <link to="/?location=Bristol"> Bristol, BR</link>
                </li>
                <li>
                <link to="/?location=Mexico"> Mexico, MX</link>

                </li>
                </ol>
        </div>
        );
}
module.exports = Examples;