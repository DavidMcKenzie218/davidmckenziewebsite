const React = require('react');

const Header = require('./Header.jsx');
const Body = require('./Body.jsx');

const HomePage = React.createClass({
  getInitialState: function(){
    return {headers: [{id:1, title:'Home'}, {id:2, title:'Title 1'}, {id:3, title:'Title 2'}]};
  },

  render: function(){
    return(
      <div className = "HomePage">
        <Header data={this.state.headers}/>
        <Body/>
      </div>
    );
  }
})

module.exports = HomePage;