import React from 'react';

function ResultView(props){
  

  return (<div className="result">
<div name="outputName" className="output">{props.outputValue}</div>
<div name="historyName" className="history">{props.historyValue}</div>
</div>
  );
}



export default ResultView;
