import React,{useState,useEffect} from "react";
import "./App.css";
import "./JokeCategory.css";

const JokeCategories = (props) => {
  const [categories, setCategories] = useState();

  useEffect(() => {
    fetch("https://api.chucknorris.io/jokes/categories")
      .then((response) => response.json())
      .then((category) => setCategories(category));
  });

  const HandelClick = (e) => {
    props.setCategory(e);
    
};

  if (!categories) {
    return <p> Loading...</p>;
  }

  return (
    <div>
      <div className="categories" >
         {[categories.map((category) => {
            return <button
                      style={{borderRadius:'8px'}}
                      value={category}
                      onClick={() =>{HandelClick(category);}}>
                      <div style={{fontWeight:"600"}}>{category}</div>
                     </button>
            })]}
      </div>
    </div>
  );
};

export default JokeCategories;