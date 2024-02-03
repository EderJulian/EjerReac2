import { useState } from "react";

const Counter = (props) => {

const [counter, setCounter] = useState(props.initialValue);

const increment = () => {

setCounter(counter + 1);

};

return <button onClick={increment}>{counter}</button>;

};

export default Counter;

