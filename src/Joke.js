import React,{useState,useEffect} from "react";

const Joke = (props) => {
  const [joke, setJoke] = useState();

  useEffect(() => {
    fetch(`https://api.chucknorris.io/jokes/random?category=${props.category}`)
      .then((response) => response.json())
      .then((joke) => setJoke(joke.value));
  }, [props.category]);

  if (!joke) {
   return <p> Please select a category</p>;
  }
  return <p> {joke} </p>;
};

export default Joke;