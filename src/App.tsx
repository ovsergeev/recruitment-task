import { RefObject, useRef } from 'react';
import { ElementC, Rectangle } from './components';
import { MainLayout } from './layout';

function App() {
  const r = useRef(null);
  const cl = () => {
    const element = r as RefObject<HTMLElement>;
    console.log('CLCLCLCL => ', element.current?.getBoundingClientRect());
  };
  return (
    <MainLayout>
      App page
      <div className="c-wrapper">
        <ElementC />
      </div>
      {/* <Rectangle
        ref={r}
        color="green"
        width="60%"
        height="40%"
        data-test="ddddd-tttt"
        onClick={cl}
      >
        RECTANGLE 1
      </Rectangle>
      <Rectangle
        tag="h1"
        color="green"
        width="60%"
        height="40%"
        onClick={() => console.log('CLICKED REACTQANGLE')}
      >
        RECTANGLE 2
      </Rectangle> */}
    </MainLayout>
  );
}

export default App;
