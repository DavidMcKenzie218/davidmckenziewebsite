const React = require('react');

const HeaderButton = require('./HeaderButton.jsx')

const Header = React.createClass({
  render: function(){

    let headers = this.props.data.map(function(header){
      return(
       <HeaderButton key={header.id} title={header.title}/>
      );
    });

    return(
      <div>
        {headers}
      </div>
    );
  }
})

module.exports = Header;