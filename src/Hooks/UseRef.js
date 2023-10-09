import { useEffect, useRef } from "react";

function UseRef() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <>
      <h1>useRef Hook</h1>
      <input type="text" ref={inputRef} />
      <p>Focus the input element when the component mounts</p>
    </>
  );
}
export default UseRef;
