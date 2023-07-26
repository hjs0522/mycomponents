import { useRecoilState } from 'recoil';
import { counterState } from '../utils/atom';

const Counter = () => {
  const [count, setCount] = useRecoilState(counterState);

  const decrement = () => setCount(count - 1);

  const increment = () => setCount(count + 1);

  return (
    <>
      <div>{count}</div>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </>
  );
};

export default Counter;