export const counter = (value: number = 0): [() => number, () => void] => {
  function getValue(): number {
    return value;
  }
  
  function incrementValue(): void {
    value++;
  }
  
  return [getValue, incrementValue];
};


const [getA, nextA] = counter(1);
getA(); // 1
nextA();
getA(); // 2


const [getB, nextB] = counter(10);
getB(); //10
nextB();
getB(); //11