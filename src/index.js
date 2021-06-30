import _ from 'lodash';
import './style.css'
import webpackIcon from './webpack-icon.png'

function component() {
    const element = document.createElement('div');
  
    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('header')

    const icon = new Image()
    icon.src = webpackIcon
    icon.alt = 'webpack logo'
    element.appendChild(icon)
  
    return element;
  }
  
  document.body.appendChild(component());