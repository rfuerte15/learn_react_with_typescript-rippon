import Alert from "../alert/alert.tsx";
import "./App.css";

const App = () => {
  console.log("test");
  return (
    <div className="App">
      <Alert type="Information" heading="Success" closable={true}>
        Everything is really good!
      </Alert>
    </div>
  );
}

export default App;