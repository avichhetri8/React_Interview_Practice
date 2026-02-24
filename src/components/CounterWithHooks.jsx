import React, { useCallback, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from '../counterSlice';

const CounterWithHooks = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
    
  // Using useCallback to memoize event handlers
  const handleIncrement = useCallback(() => {
    dispatch(increment());
  }, [dispatch]);

  const handleDecrement = useCallback(() => {
    dispatch(decrement());
  }, [dispatch]);

  const handleReset = useCallback(() => {
    dispatch(reset());
  }, [dispatch]);

  // Using useMemo to compute a value based on count
  const countInfo = useMemo(() => {
    return {
      isEven: count % 2 === 0,
      isPositive: count > 0,
      squared: count * count,
      message: count === 0 ? 'Counter is at zero' : `Counter value is ${count}`
    };
  }, [count]);

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2>Counter with useCallback and useMemo</h2>
      
      <div style={{ margin: '20px 0' }}>
        <h3>Count: {count}</h3>
        <p>{countInfo.message}</p>
        <p>Is even: {countInfo.isEven ? 'Yes' : 'No'}</p>
        <p>Is positive: {countInfo.isPositive ? 'Yes' : 'No'}</p>
        <p>Squared value: {countInfo.squared}</p>
      </div>
      
      <div style={{ display: 'flex', gap: '10px' }}>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleIncrement}>Increment</button>
      </div>
    </div>
  );
};

export default CounterWithHooks;
