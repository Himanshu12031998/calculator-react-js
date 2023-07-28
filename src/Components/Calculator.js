import React, { useState } from "react";

function Calculator() {
  const [result, setResult] = useState("");

  // when click a button then print on display
  const handleClick = (e) => {
    // here i used user only take input 13 digit in calculator
    if (result.concat(e.target.name).length < 14) {
      setResult(result.concat(e.target.name));
    }
  };

  // when click a C button than clear screen
  const handleClearAll = (e) => {
    setResult("");
  };

  // when click a backspace the reomve digit from last
  const handleBackspace = (e) => {
    setResult(result.slice(0, -1));
  };

  // when user click = button then perform operations

  const handleResult = (e) => {
    if (result !== "") {
      try {
        const output = result.replace(/^0+/, "");
        setResult(eval(output).toString());
      } catch (error) {
        setResult(" Error");
      }
    }
  };

  return (
    <div className="main-container">
      <div className="display"> {result} </div>

      <div>
        <button onClick={handleClearAll} className="red">
          C
        </button>
        <button onClick={handleBackspace} className="red">
          DEL
        </button>
        <button name="%" onClick={handleClick} className="red">
          %
        </button>
        <button name="/" onClick={handleClick} className="red">
          /
        </button>
      </div>

      <div>
        <button name="7" onClick={handleClick}>
          7
        </button>
        <button name="8" onClick={handleClick}>
          8
        </button>
        <button name="9" onClick={handleClick}>
          9
        </button>
        <button name="*" onClick={handleClick} className="red">
          *
        </button>
      </div>
      <div>
        <button name="4" onClick={handleClick}>
          4
        </button>
        <button name="5" onClick={handleClick}>
          5
        </button>
        <button name="6" onClick={handleClick}>
          6
        </button>
        <button name="-" onClick={handleClick} className="red">
          -
        </button>
      </div>
      <div>
        <button name="1" onClick={handleClick}>
          1
        </button>
        <button name="2" onClick={handleClick}>
          2
        </button>
        <button name="3" onClick={handleClick}>
          3
        </button>
        <button name="+" onClick={handleClick} className="red">
          +
        </button>
      </div>
      <div>
        <button name="0" onClick={handleClick} className="zero-btn">
          0
        </button>
        <button name="." onClick={handleClick}>
          .
        </button>
        <button onClick={handleResult} className="red">
          =
        </button>
      </div>
    </div>
  );
}

export default Calculator;