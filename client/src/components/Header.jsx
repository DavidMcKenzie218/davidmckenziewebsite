const React = require('react');

const Header = React.createClass({
  render: function(){

    let headers = this.props.data.map(function(header){
      console.log(header);
      return(
       <button key={header.id}>{header.title}</button>
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