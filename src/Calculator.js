import React, { useState, useEffect } from "react";
import "./Calculator.css";

const Calculator = () => {
  const initialOperationStack = {
    operand1: 0,
    operand2: 0,
    operation: ""
  };

  const [displayValue, setDisplayValue] = useState("0");
  const [operationStack, setOperationStack] = useState(initialOperationStack);
  const [operationActive, setOperationActive] = useState(false);
  const [nextOperand, setNextOperand] = useState(true);
  const [performOperationFlag, setPerformOperationFlag] = useState(false);
  const [historyStack, setHistoryStack] = useState("");

  const handleClick = async event => {
    const digitEntered = event.target.innerText;
    switch (digitEntered) {
      case "AC":
        setDisplayValue("0");
        setOperationStack(initialOperationStack);
        setOperationActive(false);
        setNextOperand(true);
        break;
      case "+":
      case "x":
      case "-":
      case "/":
        if (!operationActive) {
          setOperationStack({
            ...operationStack,
            operation: digitEntered,
            operand1: parseFloat(displayValue)
          });
          setOperationActive(true);
          setNextOperand(false);
        }
        break;
      case "=":
        if (operationActive) {
          await setOperationStack({
            ...operationStack,
            operand2: parseFloat(displayValue)
          });
          setOperationActive(false);
          setNextOperand(true);
          setPerformOperationFlag(true);
        }
        break;
      default:
        if (!nextOperand) {
          setDisplayValue(digitEntered);
          setNextOperand(true);
        } else {
          setDisplayValue(
            displayValue === "0" ? digitEntered : displayValue + digitEntered
          );
        }
        break;
    }
  };

 
  const performOperation = React.useCallback(() => {
    // Because of useEffect call, we make sure that at this point, all the operation stack
    // has been successfully written to
    var result = 0.0;
    var operationString = `${operationStack.operand1} ${
      operationStack.operation
    } ${operationStack.operand2} =`;
    switch (operationStack.operation) {
      case "+":
        result = operationStack.operand1 + operationStack.operand2;
        operationString = `${operationString} ${result}`;
        break;

      default:
        break;
    }
    setNextOperand(false);
    setDisplayValue(result);
    setHistoryStack(operationString);
  },[operationStack])

  useEffect(() => {
    if (performOperationFlag) {
      performOperation();
      setPerformOperationFlag(false);
    }
  }, [performOperationFlag, operationStack, performOperation]);

 
  return (
    <div className="container">
      <h2>Cloud Calculator by Otto</h2>
      <div className="display">{displayValue}</div>
      <div className="calculator">
        {[
          "AC",
          "<-",
          "%",
          "/",
          "7",
          "8",
          "9",
          "x",
          "4",
          "5",
          "6",
          "-",
          "1",
          "2",
          "3",
          "+",
          "0",
          ".",
          "="
        ].map((btnText, idx) => (
          <button onClick={handleClick} key={idx}>
            {btnText}
          </button>
        ))}
      </div>
      <div className="history">
        <h3>History</h3>
        {historyStack}
      </div>
    </div>
  );
};

export default Calculator;
