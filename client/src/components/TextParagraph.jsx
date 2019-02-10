const React = require('react');

const TextParagraph = React.createClass({

  render: function(){
    return(
      <p>{this.props.text}</p>
    )
  }

})