import React, { useState } from "react";

function HookCounterThree() {
  const [name, setName] = useState({ first: "", last: "" });
  return (
    <form>
      <input
        type="text"
        value={name.first}
        onChange={(e) => setName({ ...name, first: e.target.value })}
      />
      <input
        type="text"
        value={name.last}
        onChange={(e) => setName({ ...name, last: e.target.value })}
      />
      <h2>First : {name.first}</h2>
      <h2>Last : {name.last}</h2>
    </form>
  );
}

export default HookCounterThree;
