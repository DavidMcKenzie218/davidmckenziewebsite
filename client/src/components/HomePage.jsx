const React = require('react');

const Header = require('./Header.jsx');
const Body = require('./Body.jsx');
const HeaderButton = require('./HeaderButton.jsx');

const HomePage = React.createClass({

  getInitialState: function(){    return {headers: [{id:0, title: "loading"}], body: [{id:0, type: "text", data:"Loading"}]};
  },

  getApiData: function(){
    console.log("Requesting data from the API");
    const request = new XMLHttpRequest();
    request.open("GET", this.props.url);
    request.onload = function(){
      let apiData = JSON.parse(request.responseText);
      this.websiteData = {headers: apiData[0].headers, body: apiData[0].body};
      this.setState(this.websiteData);
      this.setBodyText(1);
    }.bind(this);
    request.send();
    console.log("API data retrieved");
  },

  setBodyText: function(buttonId){
    let bodyText = [];
    let data = this.websiteData.body;
    data.map((text) => {
      if(text.pageId == buttonId) bodyText.push({data:text});
    })
    this.setState({body:bodyText});
  },

  componentDidMount: function(){
    this.getApiData();
  },

  render: function(){

    return(
      <div>
        <Header data={this.state.headers} buttonPressed={this.setBodyText}/>
        <Body data={this.state.body}/>
      </div>
    );
  }
})

module.exports = HomePage;