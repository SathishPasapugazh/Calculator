import React from "react"


function KeyboardButton(props) {

  const keyboardValue = [
{id: "AC", key: 1, value: "AC",  type: "btn"},
{id: "DEL", key: 2, value: "Del", type:"btn" },
{id: "/", key: 4, value: "/",   type:"operator" },
{id: 7, key: 5, value: 7,     type:"number" },
{id: 8, key: 6, value: 8,     type:"number" },
{id: 9, key: 7, value: 9,     type:"number" },
{id: "*", key: 8, value: "*",   type:"operator" },
{id: 4, key: 9, value: 4,     type:"number" },
{id: 5, key: 10, value: 5,     type:"number" },
{id: 6, key: 11, value: 6,     type:"number" },
{id: "-", key: 12, value: "-",   type:"operator" },
{id: 1, key: 13, value: 1,     type:"number" },  
{id: 2, key: 14, value: 2,     type:"number" },
{id: 3, key: 15, value: 3,     type:"number" },
{id: "+", key: 16, value: "+",     type:"operator" },
{id: ".", key: 17, value: ".",   type:"number" },
{id: 0, key: 18, value: 0,     type:"number" },
{id: "%", key: 20, value: "%",     type:"number" },
{id: "=", key: 19, value: "=",   type:"operator" },
];

  function handleClick(event) {
    event.preventDefault();
    const detectedValue=event.target.id;
   props.onPress(detectedValue.toString());
    //console.log(detectedValue);
  }



  return (<div className="keyboard">{keyboardValue.map((item)=> <div className="btn" key={item.key} id={item.id} onClick={handleClick}  >
          {item.value}
</div>)}</div>);
}
export default KeyboardButton;
