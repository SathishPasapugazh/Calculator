import React from 'react';

function ResultView(props){
  

  return (<div className="result">
<div name="historyName" className="history">{props.historyValue}</div>
<div name="outputName" className="output">{props.outputValue}</div>
</div>
  );
}



export default ResultView;
