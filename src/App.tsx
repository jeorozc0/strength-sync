import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/home-page";
import CreateWorkoutPage from "./pages/create-workout-page";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create-routine" element={<CreateWorkoutPage />} />
        </Routes>
      </div>
    </QueryClientProvider>
  );
}

export default App;
