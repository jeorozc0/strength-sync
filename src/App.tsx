import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home-page";
import CreateWorkoutPage from "./pages/create-workout-page";
import { QueryClient, QueryClientProvider } from "react-query";
import ViewWorkoutPage from "./pages/view-workout-page";
import EditWorkoutPage from "./pages/edit-workout-page";
import Login from "./pages/login";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/routine/:workout_id" element={<ViewWorkoutPage />} />
        <Route path="/create-routine" element={<CreateWorkoutPage />} />
        <Route path="/edit-workout/:workout_id" element={<EditWorkoutPage />} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
