import React from 'react';

function PropsFn({ name, surname, children }) {
  // props.name="Batman"
  // return <h1>Welcome {props.name} Props Fn</h1>;
  return (
    <div>
      <h1>
        Welcome {name} {surname} Props Fn
      </h1>
      <p>{children}</p>
    </div>
  );
}

export default PropsFn;
