import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home-page";
import CreateWorkoutPage from "./pages/create-workout-page";
import { QueryClient, QueryClientProvider } from "react-query";
import ViewWorkoutPage from "./pages/view-workout-page";
import EditWorkoutPage from "./pages/edit-workout-page";
import Login from "./pages/login";
import ProtectedRoute from "./components/protected-route";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route element={<ProtectedRoute />}>
        {/* <Sidebar /> */}
          <Route path="/" element={<HomePage />} />
          <Route path="/create-routine" element={<CreateWorkoutPage />} />
          <Route
            path="/edit-workout/:workout_id"
            element={<EditWorkoutPage />}
          />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/routine/:workout_id" element={<ViewWorkoutPage />} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
