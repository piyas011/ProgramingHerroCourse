import { useState } from "react";

export default function ClickEvent() {
  const [taka, setTaka] = useState(0);

  function clickAndEarnTaka() {
    setTaka(taka + 100);
  }

  return (
    <div>
      <h1>Click the Button</h1>
      <p>Total : {taka} Tk</p>
      <button onClick={clickAndEarnTaka}>Click And Earn </button>
    </div>
  );
}
