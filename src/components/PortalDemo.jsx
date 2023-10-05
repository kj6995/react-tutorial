import React from "react";
import ReactDOM from "react-dom";

const PortalDemo = (props) => {
    // return (
    //     <div>
    //       <h1>Portals Demo</h1>
    //     </div>
    //   );
  return ReactDOM.createPortal(
    <div>
      <h1>Portals Demo</h1>
    </div>,
    document.getElementById("portal-root")
  );
};

export default PortalDemo;
