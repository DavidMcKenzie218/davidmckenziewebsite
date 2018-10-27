const React = require('react');
const ReactDOM = require('react-dom');
const HomePage = require('./components/HomePage.jsx');

window.onload = function(){
  ReactDOM.render(
    <HomePage/>,
    document.getElementById('website'));
}