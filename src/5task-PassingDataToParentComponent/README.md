# 5. Passing Data to Parent Component Example

Review following code snippet and answer questions:

1. What options do we have to get `open` value in Parent component?
2. What benefits and drawbacks of each method?

Code:

```
import { FC, useReducer } from 'react';

export const Parent: FC = () => {
  return (
    <div>
      <Child>
        <!-- How to get `open` value here and work with it? -->
        <!-- e.g. open ?? <SomeOtherComponent/> -->
      </Child>
    </div>
  );
};

const Child: FC = () => {
  const [open, toggleOpen] = useReducer(value => !value, false);
  return (
    <div>
      <button onClick={toggleOpen}>
        Toggle
      </button>
    </div>
  );
};
```

Answers:

1. What options do we have to get `open` value in Parent component?

```
1st
import { FC, ReactNode, useReducer } from 'react';

const Parent: FC = () => {
  const [open, toggleOpen] = useReducer(value => !value, false);
  
  return (
    <Child toggleOpen={toggleOpen}>
      {open && <div>SomeOtherComponent</div>}
    </Child>
  );
};

type ChildType = {
  children: ReactNode
  toggleOpen: () => void
}

const Child: FC<ChildType> = ({ children, toggleOpen }) => {
  return (
    <>
      <button onClick={toggleOpen}>Toggle</button>
      {children}
    </>
  );
};

createRoot(document.getElementById('root') as HTMLElement).render(<Parent />);
```

```
2nd
import { useReducer, ReactNode, FC } from 'react';

const Parent = () => (
  <Child>{(open) => open && <div>SomeOtherComponent</div>}</Child>
);

type ChildType = {
  children: (value: boolean) => ReactNode;
};

const Child: FC<ChildType> = ({ children }) => {
  const [open, toggleOpen] = useReducer(value => !value, false);
  
  return (
    <div>
      {children(open)}
      <button onClick={toggleOpen}>Toggle</button>
    </div>
  );
};

createRoot(document.getElementById('root') as HTMLElement).render(<Parent />);
```

2. What benefits and drawbacks of each method?

The first option extends the logic of our component. The second option allows you to implement all the logic inside our component. 