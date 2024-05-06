import { useState } from "react";
import "./App.css";
import Btn from "./button";

function App() {
  const [calValue, SetCalValue] = useState("");
  let buttons = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "C",
    "0",
    "=",
    "-",
    "*",
    "/",
    "+",
    "%",
    "Ans"
  ];
  const OnButtonClicked = (item) => {
    if(item === "C"){
      SetCalValue("");
    }else if(item === "=" || item === "Ans"){
      let result = eval(calValue);
      SetCalValue(result);
    }else{
      let newarray = calValue + item;
      SetCalValue(newarray);
      console.log(calValue);
    }
  }
 
  return (
    <>
      <center>
        <h1 style={{color:'orange', fontSize:"50px"}}>Basic Calculator</h1>
        <div className="border">
          <input
            className="input-field"
            type="text"
            value={calValue}
          readOnly
          />
          <div className="btn-area">
            {buttons.map((item, index) => (
              <Btn
                key={index}
                value={item}
                onButtonClick={()=>{OnButtonClicked(item)}}
              />
            ))}
          </div>
        </div>
      </center>
    </>
  );
}

export default App;
