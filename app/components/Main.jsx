var React = require('react');
var Nav = require('Nav');
var About = require('About');
var Examples = require('Examples');

var Main = React.createClass({
    render: function(){
        return(
            <div>
                <Nav/>
                <h2>Main component</h2>
                {this.props.children}
            </div>
        );
    }
})

module.exports = Main;