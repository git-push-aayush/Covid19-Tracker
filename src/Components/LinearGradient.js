import React from 'react';


const linearGradient = props => {
  const { data } = props;
  const boxStyle = {
    width: 180,
    margin: 'auto'
  };
  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${data.fromColor} , ${data.toColor})`,
    height: 20,
    width:200
  };
  return (
    <div>
      <div style={boxStyle} className="d-flex">
        <span>{data.min}</span>
        <span className="flex-grow-1"></span>
        <span>{data.max}</span>
       
      </div>
      <div style={{ ...boxStyle, ...gradientStyle }} className=""></div>
    </div>
  );
};

export default linearGradient;