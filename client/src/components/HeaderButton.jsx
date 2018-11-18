const React = require('react');

const headerButton = React.createClass({

  buttonIsClicked: function(){
    this.props.whenClicked(this.props.id)
  },

  render: function(){
    return(
      <div>
        <button id={this.props.key} onClick={this.buttonIsClicked}>{this.props.title}</button>
      </div>
    );
  }

})

module.exports = headerButton;