var React = require('react');
var Nav = require('Nav');
var About = require('About');
var Examples = require('Examples');


var Main = (props) => {
       return( <div>
             <Nav/>
                <h2>Main component</h2>
                {props.children}
        </div>
       );
}

module.exports = Main;