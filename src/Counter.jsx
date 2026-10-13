import { useContext } from "react";
import { CounterContext } from "./CounterContext";

export default function Counter() {
  const { count, dispatch } = useContext(CounterContext);

  return (
    <div className="counter-card">
      <p className="counter-label">CURRENT COUNT</p>

      <h1 className="count">{count}</h1>

      <div className="button-group">
        <button
          className="increment"
          onClick={() => dispatch({ type: "INCREMENT" })}
        >
          + Increment
        </button>

        <button
          className="decrement"
          onClick={() => dispatch({ type: "DECREMENT" })}
        >
          − Decrement
        </button>

        <button
          className="reset"
          onClick={() => dispatch({ type: "RESET" })}
        >
          Reset
        </button>
      </div>

      <p className="counter-info">
        State managed using useContext & useReducer
      </p>
    </div>
  );
}