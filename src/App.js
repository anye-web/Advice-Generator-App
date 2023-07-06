import { useEffect, useState } from "react";
import "./Style.css";
import DividerImg from "./images/pattern-divider-desktop.svg";
import DiceImg from "./images/icon-dice.svg";

function App() {
  const [advice, setAdvice] = useState({});
  const [randNumber, setRandNumber] = useState(1);

  useEffect(() => {
    async function getAdvice() {
      const res = await fetch(
        `https://api.adviceslip.com/advice/${randNumber}`
      );
      const data = await res.json();
      setAdvice(data.slip);
    }
    getAdvice();
  }, [randNumber]);

  function getRandomNum(e) {
    e.preventDefault();
    const randNum = Math.floor(Math.random() * 200);
    setRandNumber(randNum);
  }

  return (
    <div className="App">
      <div className="content">
        <h1>Advice #{advice.id}</h1>
        <p className="content-info">“{advice.advice}”</p>

        <img src={DividerImg} alt="" className="divider-img" />
        <button onClick={getRandomNum} className="btn">
          <img src={DiceImg} alt="" className="btn-img" />
        </button>
      </div>
    </div>
  );
}

export default App;
