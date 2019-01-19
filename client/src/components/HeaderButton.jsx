const React = require('react');
const ButtonStyle = require('./css_styles/ButtonStyle.js');

import css from './css_styles/FlexBox.css';

const headerButton = React.createClass({

  buttonIsClicked: function(){
    this.props.whenClicked(this.props.id)
  },

  render: function(){
    return(
      <button style={ButtonStyle} id={this.props.key} onClick={this.buttonIsClicked}><span>{this.props.title}</span></button>
    );
  }

})

module.exports = headerButton;