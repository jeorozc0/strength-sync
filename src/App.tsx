import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import WorkoutCreator from "./pages/workout-creator";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-routine" element={<WorkoutCreator />} />
      </Routes>
    </div>
  );
}

export default App;
