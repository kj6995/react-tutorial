import React from "react";

function MemoComp({ name }) {
  console.log("Rendering Memo Component");
  return <div>Welcome {name}</div>;
}

// export default MemoComp
export default React.memo(MemoComp); // Memo works in React 16.6 or higher
//This is a Higher order function (HOF)


// IronMan(Tony Stark)