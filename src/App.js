import { useDispatch, useSelector } from 'react-redux';
import './App.css';

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch()

  const increment = () => {
    dispatch({ type: "INC" })

  };
  const decrement = () => {
    dispatch({ type: "DEC" })
  };
  const addBy = () => {
    dispatch({ type: "ADD", payload: 10 })
  };
  const reset = () => {
    dispatch({ type: "RESET" })
  };


  return (
    <div className="App">
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={addBy}>Add value 10</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default App;
