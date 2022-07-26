import React, {useState} from 'react';
import KeyboardButton from "./KeyboardValue";
import ResultView from "./ResultView"

function App(){
const [newOutput, setNewOutPut]= useState("");
const [history, setHistory]=useState("");

function catchOutput(output) {
	const numbers   = ["0","1","2","3","4","5","6","7","8","9"];
	const operators = ["-","*","+","/","%"];
	const functions = ["=","AC", "DEL"];
      //console.log(history);
if(numbers.includes(output)){
			setNewOutPut(preValue=>  [preValue + output]);
		} else if(operators.includes(output)){			
			let	stringValue = history.toString();
			const regx= /[*+-/]/;
if (stringValue.match(regx) === null){
setHistory((preValue)=> [preValue + newOutput + output]);
}else {
const foundOperator = stringValue.match(regx).toString();
let secondValue = newOutput.toString();
switch (foundOperator) {
	case "+":
		setHistory(()=>{
			
			var total= +stringValue.slice(0,-1) + +secondValue + output;
			console.log(stringValue);
			return total;
			
			});
		break;
		case "-":
		setHistory(()=>{
			
			var total= (+stringValue.slice(0,-1) - +secondValue + output);
			console.log(stringValue);
			return total;
			
			});
		break;
		case "*":
		setHistory(()=>{
			
			var total= (+stringValue.slice(0,-1) * +secondValue + output);
			console.log(stringValue);
			return total;
			
			});
		break;
		case "/":
		setHistory(()=>{
			
			var total= (+stringValue.slice(0,-1) / +secondValue + output);
			console.log(stringValue);
			return total;			
			});
		break;
		case "%":
		setHistory(()=>{
			
			var total= (+stringValue.slice(0,-1) % +secondValue + output);
			console.log(stringValue);
			return total;			
			});
		break;

	default:
		setHistory("notWorking");
}

//console.log(foundOperator);


}
    setNewOutPut("");
		 	 
		 } else if(functions.includes(output)){
			 switch (output) {				 
				 case "AC":
					 setNewOutPut("");
					 setHistory("");
					 break;
					 case "DEL":
					 if(newOutput===""){
						 setHistory(history.toString().slice(0,-1));
					 }else{
            setNewOutPut(newOutput.toString().slice(0,-1));
					 }			 
					 
					 break;
					 case "=":
					 			 
					 
					 break;
			 
				 default:
					 break;
			 }
			 
		 }
	//console.log(output);
	//console.log(numbers.includes(output));
	
	
}
	
	return (<div className="app">
	<div className="container">
	<ResultView outputValue={history} historyValue={newOutput}/>
	<KeyboardButton onPress={catchOutput} />
	 </div>  
	</div>);
}
export default App;