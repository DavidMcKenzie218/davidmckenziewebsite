const React = require('react');

const Body = React.createClass({

  createBody: function(){
    let body = this.props.data.map(function(data){
      
    })
  },

  render: function(){

    let paragraphs = this.props.data.map(function(paragraph){
      return (
        <p>{paragraph.para}</p>
      );
    })

    return(
      <div>
        {paragraphs}
      </div>
    );
  }
})

module.exports = Body;