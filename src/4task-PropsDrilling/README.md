# 4. Props Drilling Example

Review following code snippet and answer questions:

1. What’s wrong with this code snippet?
2. How can we improve it?
3. What benefits and drawbacks of each method?

Code: 

```
import React, { FC, useState } from "react";

export const Parent: FC = () => {
  const [count, setCount] = useState(0);
  const [extraA, setExtraA] = useState(1);
  const [extraB, setExtraB] = useState(2);
  
  return (
    <LayerA
      count={count}
      setCount={setCount}
      extraA={extraA}
      extraB={extraB}
    /> 
  );
};

LAYER A -------------------------------------------------

type LayerAProps = {
  count: number;
  setCount: (value: number) => void;
  extraA: number;
  extraB: number;
}

const LayerA: FC<LayerAProps> = ({ count, setCount, extraA, extraB}) => (
  <div>
    <LayerB count={count} setCount={setCount} extraB={extraB} />
    <div>{extraA}</div>
  </div> 
);

LAYER B -------------------------------------------------

type LayerBProps = {
  count: number;
  setCount: (value: number) => void;
  extraB: number;
}

const LayerB: FC<LayerBProps> = ({ count, setCount, extraB }) => (
  <div>
    <Child count={count} setCount={setCount} />
    <div>{extraB}</div>
  </div> 
);

LAST CHILD ----------------------------------------------

type ChildProps = {
  count: number;
  setCount: (value: number) => void;
}

const Child: FC<ChildProps> = ({ count, setCount }) => (
  <>
    <p>{count}</p>
    <button onClick={() => setCount(count + 1)}>Inc</button>
  </>
);
```

Answers:

1. What’s wrong with this code snippet?

   - extraA and extraB do not use functions that change their state.
   - For me, the code is very complicated and there are a lot of unnecessary components and logic. 
   - A lot of components we use only to pass props, these problems are solved by the context or by the state manager.
   - We can create a Child component and put the constants there, then wrap that component using children to avoid unnecessary re-renders.

2. How can we improve it?

```
export const Parent: FC<{ children: ReactNode }> = ({ children }) => {
  const [count, setCount] = useState(0);
  
  const onHandleClick = () => {
    setCount(c => c + 1);
  };
  
  return (
    <>
      <div>{count} - count</div>
      <button onClick={onHandleClick}>INCREASE</button>
      <div>{children}</div>
    </>
  );
};

const EXTRA_A = 1;
const EXTRA_B = 2;

const Child: FC = () => (
  <>
    <div>{EXTRA_A} - EXTRA_A</div>
    <div>{EXTRA_B} - EXTRA_B</div>
  </>
);


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<>
  <Parent>
    <Child />
  </Parent>
</>);
```

3. What benefits and drawbacks of each method?

Your method has a lot of redundant and unused functionality and unnecessary renders. My method doesn't seem very flexible, but it looks cleaner and more productive.