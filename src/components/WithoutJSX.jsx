import React from 'react';

function WithoutJSX() {
  // return React.createElement('div', null, 'Hello Kushagra');
  return React.createElement(
    'div',
    { id: 'someid', className: 'some-class' },
    React.createElement('h1', null, 'Hello Kushagra')
  );
}

export default Welcome;
