import { RefObject, useRef, useState } from 'react';
import { Rectangle } from '../rectangle';

import './index.css';

export const ElementC: React.FC = ({}) => {
  const [isMoving, setIsMoving] = useState(false);
  const elementERef = useRef(null);

  const clic = () => {
    if (isMoving) return;

    const element = elementERef as RefObject<HTMLElement>;
    setIsMoving(true);
  };

  return (
    <Rectangle
      id="wrapper"
      className="container"
      width="100%"
      height="300px"
      color="blue"
    >
      <Rectangle
        ref={elementERef}
        id="child"
        className="box"
        height="100px"
        width="100px"
        color="yellow"
        onMouseOver={clic}
      >
        ELEMENT E
      </Rectangle>
    </Rectangle>
  );
};
