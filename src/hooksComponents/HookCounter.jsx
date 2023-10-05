import React, { useState, useEffect } from "react";

function HookCounter() {
  // Call at the top level
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("Updating document Title");
    document.title = `Click: ${count}`;
  }, []);

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setCount(count + 1)}>Count {count}</button>
    </div>
  );
}

export default HookCounter;

// useEffect runs after every render
