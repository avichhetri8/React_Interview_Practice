import { useContext, useRef } from "react"
import { useState } from "react"
import { MyAppContext } from "../main"

const Counter = () =>{
    const data = useContext(MyAppContext)
    const countRef = useRef(0);
    const [count, setCount] = useState({val : 0, t : 12})
    const increment = () => {
        //setCount(prevCount => ({...prevCount, count: prevCount + 1}))
        setCount(count => ({...count, val : count.val + 1, t : 11}))
        //setCount({...count, count: count + 1})
        countRef.current = countRef.current + 1;
    }

    const decrement = () => {
        setCount(count => ({...count, val: count.val - 1}))
    }
    
    const reset = () => setCount({val : 0, t : 12});

    return(
        <div>
            <h1>Count : {data}</h1>
            <p>Count is {count.val} & current Ref is {countRef.current}</p>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={reset}>Reset</button>
        </div>
    )


}
export default Counter;