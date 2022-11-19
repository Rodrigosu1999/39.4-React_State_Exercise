import EightBall from "./EightBall";
import answers from "../helpers/answers";

function App() {
  return (
    <div className="App">
      <h1>Eight Ball</h1>
      <EightBall answers={answers}/>
    </div>
  );
}

export default App;
