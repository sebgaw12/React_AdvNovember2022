import { useState } from "react";

const CounterHook = (props) => {

    const [counter, setCounter] = useState(0)
    return (

        <div>
        <h1>Counter:{counter}</h1>
        <button onClick={() => setCounter(counter + 1)}>Click+</button>
        </div>
    )
}

export default CounterHook;
