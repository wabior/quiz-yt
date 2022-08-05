import './App.css';
import Header from "./components/Header/Header";
import Welcome from "./components/Welcome/Welcome";
import Quiz from "./components/Quiz/Quiz";
import Score from "./components/Score/Score";

function App() {
  return (
    <div className="App">
        <Header/>
        <Welcome/>
        <Quiz/>
        <Score/>
    </div>
  );
}

export default App;
