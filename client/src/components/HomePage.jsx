const React = require('react');

const Header = require('./Header.jsx');
const Body = require('./Body.jsx');
const HeaderButton = require('./HeaderButton.jsx');

const HomePage = React.createClass({

  getInitialState: function(){    return {headers: [{id:1, title:'Home'}, {id:2, title:'Title 1'}, {id:3, title:'Title 2'}], body: [{para:"This is paragraph One"}, {para:"This is paragraph Two"}]};
  },

  setBodyText: function(buttonId){
    let sampleText = [{id:1, para:"this is home page"}, {id:1, para:"this is still home page"}, {id:2, para:"this is title 1 page"}, {id:3, para:"this is title 2 page"}];
    let bodyText = [];
    sampleText.map((text) => {
      if(text.id == buttonId) bodyText.push({para:text.para});
    })
    this.setState({body:bodyText});
  },

  render: function(){
    return(
      <div className = "HomePage">
        <Header data={this.state.headers} buttonPressed={this.setBodyText}/>
        <Body data={this.state.body}/>
      </div>
    );
  }
})

module.exports = HomePage;