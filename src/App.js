import React,{useEffect} from "react";
import { createContext } from "react/cjs/react.production.min";
import CompC from "./CompC";
import { Add, Sub } from "./Calc";
import Card from "./Card";
import Cdata from "./Cdata";
import "./Card.css";
import SlotM from "./SlotM";
import { useState } from "react/cjs/react.development";
const FirstName = createContext();
const LastName = createContext();

const App = () => {
  //const state = useState();
  
  const [count, setCount] = useState(0);

  
  useEffect(() => {
    alert('I am clicked');
   },[count]);
  let datetime = new Date().toLocaleTimeString();
  const [time, setTime] = useState(datetime);
  const GetTime = () => {
    datetime = new Date().toLocaleTimeString();
     // console.log(time);
    setTime(datetime);
  };
  setInterval(GetTime,1000);
  let bgColor = 'yellow';
  const [bg,getBgColor] =  useState(bgColor);
  const getBg = () => {
      const color = 'green';
    getBgColor(color);
  }
  const [name,setName] = useState();
  const [fullName,setFullName] = useState();

  const InputEvent = (event) => {
      setName(event.target.value);
  }
  const onSubmit = () => {
    setFullName(name);
  }
  return (
    <>
    <div style={{backgroundColor:bg}}>
      <ul>
        <li>The sum of two no is {Add(40, 20)}</li>
        <li>The sub of two no is {Sub(40, 20)}</li>
      </ul>
      <FirstName.Provider value={"Shantanu"}>
        <LastName.Provider value={"Mandal(Arambagh)"}>
          <CompC />
        </LastName.Provider>
      </FirstName.Provider>
      <div class="row">
        <h2>Card List</h2>
        <p>Resize the browser window to see the effect.</p>
        {Cdata.map((val, index) => {
          return (
            <Card
              key={index}
              name={val.name}
              description={val.description}
            ></Card>
          );
        })}
      </div>

      <div>
        <h1>Slot Machine</h1>
        <div>
          <SlotM x="😃" y="😃" z="😃"></SlotM>
        </div>
      </div>

      <div style={{textAlign:'center',padding:'5px'}}>
        <p>{count}</p>
        <button className='btn-info' onClick={()=>{
          setCount(count + 1);
        }}>Click Me</button>
      </div>
      <div style={{textAlign:'center',padding:'5px'}}>
        <p>{time}</p>
        <button className='btn-info' onClick={GetTime}>Get Time </button>
      </div>
      <div style={{textAlign:'center',padding:'5px'}}>
        <button className='btn-info' onClick={getBg}>Get BG </button>
      </div>
      <div style={{textAlign:'center',padding:'5px'}}>
          <h1>Hello {fullName}</h1>
          <input type="text" placeholder="Enter Your Name" onChange={InputEvent} value={name}/>
          <button className='btn-info' onClick={onSubmit}>Submit</button>
      </div>
      </div>
    </>
  );
};

export default App;
export { FirstName, LastName };
