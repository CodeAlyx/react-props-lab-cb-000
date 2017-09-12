import React from 'react';

export default class Spaceship extends React.Component {
  render() {
    return (
      <div className='spaceship'>
        <h2>{ this.props.name }</h2>
        <ul>
          <li>Speed - { this.props.speed }</li>
          <li>Rocket Equipped - { this.props.hasRockets }</li>
          <li>Colors - { this.props.colors.join(', ') }</li>
        </ul>
      </div>
    )
  }
};

Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets: false,
  colors: [ 'red', 'black' ]
}

//export default Spaceship;
