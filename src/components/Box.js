import React, { useState } from "react";

const Box = (prop) => {
  const { value } = prop;
  const { name, age, color } = value;
    const [col,setCol]=useState(color)

  const handleClick = () => {
    
  };

  const handleChange=(event)=>{
    
  }
  return (
    <div
      className="box"
      style={{ border: "2px solid gray", backgroundColor: color }}
    >
      this is a box. My name is {name} and my age is {age} 
      <br />
      {/* {age>10 &&  <button onClick={handleClick}>click me</button> } */}
      {age > 10 ? (
        <button onClick={handleClick}>click me</button>
      ) : (
        <button onClick={handleClick}>dont click me</button>
      )}
      enter color<input type="text" onChange={handleChange}/> 
    </div>
  );
};

export default Box;

// const obj={
//     name:"divyanshi",
//     age:9,
// }
// // console.log(obj.age)

// const {name,age}=obj
// console.log(name,age)
