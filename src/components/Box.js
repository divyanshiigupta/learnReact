import React from "react"

const Box = (prop) => {
    const { name, age, color } = prop

    const handleClick = () => {
        alert("the button is clicked")
    }
    return (
        <div className="box" style={{ border: "2px solid gray", backgroundColor: color }}>
            this is a box. My name is {name} and my age is {age}<br />
            {/* {age>10 &&  <button onClick={handleClick}>click me</button> } */}
            {age > 10 ? <button onClick={handleClick}>click me</button> : <button onClick={handleClick}>dont click me</button>}


        </div>
    )
} 

export default Box

// const obj={
//     name:"divyanshi",
//     age:9,
// }
// // console.log(obj.age)

// const {name,age}=obj
// console.log(name,age)

