import React,{useState} from "react";
import "./App.css";
import JokeCategories from "./JokeCategory";
import Joke from "./Joke";

function App() {
  const [selectedCategory, setSelectedCategory] = useState();
  return (
    <div className="App">
      <h1> Chuck Norries</h1>
      <div style={{backgroundColor:"#cdcdcd",padding:"10px"}}>
      <JokeCategories setCategory={setSelectedCategory} />
      </div>
      <h3 style={{textAlign:"center"}}>Selected Category : {selectedCategory} </h3>
      <div style={{backgroundColor:"#1E90FF",height:"250px",color:"#fff",display:"flex",justifyContent:"center",alignItems:"center"}}>
      <Joke category={selectedCategory} />
      </div>
      <div style={{color:"blue",textAlign:"center",fontWeight:"bold",marginTop:"5px"}}>New Joke</div>
    </div>
  );
}

export default App;