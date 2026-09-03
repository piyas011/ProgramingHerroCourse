import { useState } from "react";

export default function AddRun() {
  const [run, setRun] = useState(0);
  function addRun1() {
    setRun(run + 1);
  }
  function addRun2() {
    setRun(run + 2);
  }
  function addRun4() {
    setRun(run + 4);
  }
  function addRun6() {
    setRun(run + 6);
  }

  return (
    <div>
      <p>=================</p>
      <h2>Run Calculate</h2>
      <h3>Total Run : {run} run</h3>

      <button onClick={addRun1}>run 1</button>
      <button onClick={addRun2}>run 2</button>
      <button onClick={addRun4}>run 4</button>
      <button onClick={addRun6}>run 6</button>
    </div>
  );
}
