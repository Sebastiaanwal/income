import React from 'react';
import ReactDOM from 'react-dom';

const box = ["#8b9474", "#6cae75", "#8bbd8b", "#c1cc99", "#f5a65b"];
const divStyle = { background: "#8b9474" }

class Box extends React.Component {
  constructor(props) {
  super(props);
  }
  render() {
    const boxes = box.map((box) =>
    <div className="box" style={divStyle}></div>
    );
    return(
      <div className="container">{boxes}</div>
    );
  }
}

ReactDOM.render(<Box />, document.getElementById("root"));
