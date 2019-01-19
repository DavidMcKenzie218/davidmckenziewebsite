const React = require('react');

const HeaderButton = require('./HeaderButton.jsx');

import css from './css_styles/FlexBox.css';

const Header = React.createClass({

  render: function(){

    let headers = this.props.data.map((header) => {
      return(
       <HeaderButton key={header.id} title={header.title} whenClicked={this.props.buttonPressed} id={header.id}/>
      )
    });

    return(
      <div className="flexDiv">
        {headers}
      </div>
    );
  }
})

module.exports = Header;