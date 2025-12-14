import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      <button onClick={handleClick}>
        {count} 回押しました
      </button>
    </div>
  );
}

export default Counter;