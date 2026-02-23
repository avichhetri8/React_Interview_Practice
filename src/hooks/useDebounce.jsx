import { useEffect, useState } from "react";

const useDebounce = (value, delay = 500) => {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounced(value);
    }, delay);
    console.log("setting timer", timer);
    return () => clearTimeout(timer);
  }, [value, delay]);


  console.log("debounced", debounced);
  return debounced;
}
export default useDebounce; 