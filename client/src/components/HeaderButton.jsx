const React = require('react');

const headerButton = React.createClass({

  render: function(){
    return(
      <div>
        <button id={this.props.key}>{this.props.title}</button>
      </div>
    );
  }

})

module.exports = headerButton;