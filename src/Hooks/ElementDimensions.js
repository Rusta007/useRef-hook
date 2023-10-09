import { useEffect, useRef, useState } from "react";

function ElementDimensions() {
  const elementRef = useRef(null);
  const [dimention, setDimention] = useState({
    width: 0,
    height: 0
  });

  useEffect(() => {
    const element = elementRef.current;

    if (element) {
      const { clientWidth, clientHeight } = element;
      setDimention({
        width: clientWidth,
        height: clientHeight
      });
    }
  });

  return (
    <div ref={elementRef}>
      <hr />
      <h1>Box sized</h1>
      <h1>Width : {dimention.width}</h1>
      <h1>Height : {dimention.height}</h1>
    </div>
  );
}
export default ElementDimensions;
