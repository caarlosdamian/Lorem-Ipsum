import { useState } from "react";
import data from "./data";
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {};

  return (
    <div className="App">
      <h2>Lorem ipsum Project</h2>
      <form className="lorem-form" onSubmit={handleSubmit}></form>
    </div>
  );
}

export default App;
