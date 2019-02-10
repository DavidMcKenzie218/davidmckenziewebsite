const React = require('react');

const TextHeader = React.createClass({

  render: function(){
    return(
      <h2>{this.props.textHeader}</h2>
    )
  }

})