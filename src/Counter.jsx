import { useState } from "react";


export default function Counter() {
    const [counter, setCounter] = useState(0);

    const increment = () => {
        if (counter == 10) {
            alert("Value can not be greater than 10.")
            return;
        }
        return (
            setCounter(counter + 1)
        )
    }
    const decrease = () => {
        if (counter == 0) {
            alert("Value can not be less than Zero.")
            return;
        }
        return (

            setCounter(counter - 1)
        )
    }
    return (
        <>
            <h1>{counter}</h1>
            <button onClick={increment}>Increase</button>
            <button onClick={decrease}>Decrease</button>
        </>
    )


}