import { useState } from "react";
import "./styles.css";

export default function App() {
  const [isVisible, setIsVisible] = useState(true);

  console.log(isVisible);

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="App">
      <h1>useState</h1>
      <p>
        {isVisible &&
          "this paragrapgh will be visible if isVisible equals true"}
      </p>
      <button onClick={() => setIsVisible(!isVisible)}>toggle</button>
      <button onClick={handleClick}>toggle-2</button>
    </div>
  );
}