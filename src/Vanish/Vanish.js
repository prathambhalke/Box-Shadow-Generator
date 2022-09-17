import { useState } from "react";
export default function Vanish() {
  const [show, setshow] = useState(true);

  // const vanish = () => {
  //   if (show == true) {
  //     setshow("hey");
  //   } else if (show == false) {
  //     setshow(false);
  //   } else {
  //     setshow(true);
  //   }
  // };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>{show && "this is text"}</h2>
      <button onClick={() => setshow(!show)}>{show ? "hide" : "show"}</button>
    </div>
  );
}
