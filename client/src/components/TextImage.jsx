const React = require('react');

const TextImage = React.createClass({
  render: function(){
    render(
      <img src={this.props.textImage}/>
    )
  }
})