import React from "react";

// const InputFn = React.forwardRef((props,ref) => {
//   return (
//     <div>
//       <input type="text" ref={ref} />
//     </div>
//   );
// });

// function InputFn() {
//   return (
//     <div>
//       <input type="text" ref={ref} />
//     </div>
//   );
// }

const InputFn = React.forwardRef((props, ref) => {
  const abc = () => {}
  return (
    <div>
      <input type="text" ref={ref} />
    </div>
  );
});

export default InputFn;
