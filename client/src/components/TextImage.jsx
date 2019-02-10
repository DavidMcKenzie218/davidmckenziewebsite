const React = require('react');

const TextImage = React.createClass({
  render: function(){
    return(
      <img src={this.props.textImage}/>
    )
  }
})