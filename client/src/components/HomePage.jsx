const React = require('react');

//I am using the ES6 class declaration as I have never used this before and I am taking the opertunity
//to learn how to use ES6 and React together.
const HomePage = React.createClass({
  render: function(){
    return(
      <div className = "HomePage">
        <h2>Home Page</h2>
      </div>
      );
  }
})

module.exports = HomePage;