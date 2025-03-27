import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";
import { useEffect } from "react";

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios.get("/api/jokes")
    .then((response) => {
      console.log(response.data);
      setJokes(response.data);
    }
    )
    .catch((error) => {
      console.log.error(error);
    });
  });

  return (
    <>
      <h1>Chai aur fullStack</h1>
      <p>Jokes:{jokes.length}</p>

      {jokes.map((joke) => (
        <div key={joke.id}>
          <h3>{joke.title}</h3>
          <p>{joke.body}</p>
        </div>
      ))}
    </>
  );
}

export default App;
