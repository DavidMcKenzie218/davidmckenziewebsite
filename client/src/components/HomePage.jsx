const React = require('react');

const Header = require('./Header.jsx');
const Body = require('./Body.jsx');

const HomePage = React.createClass({
  render: function(){
    return(
      <div className = "HomePage">
        <Header/>
        <Body/>
      </div>
    );
  }
})

module.exports = HomePage;