import { useState } from "react";
export default function AddTask({ onAdd }) {
  const [enteredValue, setEnteredValue] = useState("");
  function handleChange(event) {
    setEnteredValue(event.target.value);
  }

  function handleClick(text) {
    if (text.trim === "") {
      return;
    }
    onAdd(text);
    setEnteredValue("");
  }

  return (
    <div className=" flex my-4 gap-4 items-center ">
      <input
        type="text"
        className=" bg-stone-300 p-1 rounded-sm"
        onChange={() => handleChange(event)}
        value={enteredValue}
      />
      <button onClick={() => handleClick(enteredValue)}>Add Task</button>
    </div>
  );
}
