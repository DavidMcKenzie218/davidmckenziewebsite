const React = require('react');

const TextHeader = require('./TextHeader.jsx');
const TextParagraph = require('./TextParagraph.jsx');
const TextImage = require('./TextImage.jsx');

const Body = React.createClass({

  render: function(){ 

  let body = this.props.data.map((content) => {
    const component = (type) => ({
      "header": <TextHeader textHeader={content.data.data}/>,
      "text": <TextParagraph text={content.data.data}/>,
      "image": <TextImage textImage={content.data.data}/>
    })[type]

    return component(content.data.type);
  })                                      

    return(
      <div>
        {body}
      </div>
    );
  }
})

module.exports = Body;