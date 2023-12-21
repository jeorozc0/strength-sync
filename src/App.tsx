import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import WorkoutCreator from "./pages/workout-creator";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-routine" element={<WorkoutCreator />} />
        </Routes>
      </div>
    </QueryClientProvider>
  );
}

export default App;
