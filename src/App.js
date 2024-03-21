import logo from "./logo.svg";
import "./App.css";
import Form from "./components/Form";
import Box from "./components/Box";

function App() {
  const data = [
    {
      name: "divyanshi",
      age: 7,
      color: "purple",
    },
    {
      name: "chirag",
      age: 5,
      color: "blue",
    },
    {
      name: "garima",
      age: 6,
      color: "red",
    },
    {
      name: "pooja",
      age: 8,
      color: "yellow",
    },
    {
      name: "tina",
      age: 6,
      color: "orange",
    },
  ];

  const dataArray = data.map((element) => {
    if (element.age > 6) {
      return <Box value={element} />;
    }
  });

  return (
    <div className="App">
      {/* <Form/>
      <Box name="divyanshi" age={11} color="red"/>
      <Box name="chirag" age={4} color="green"/> */}
      {dataArray}
    </div>
  );
}

export default App;
