import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home-page";
import CreateWorkoutPage from "./pages/create-workout-page";
import { QueryClient, QueryClientProvider } from "react-query";
import ViewWorkoutPage from "./pages/view-workout-page";
import EditWorkoutPage from "./pages/edit-workout-page";
import Login from "./pages/login";
import ProtectedRoute from "./components/protected-route";
import TrackerPage from "./pages/tracker-page";
import TrackerWorkoutPage from "./pages/exercise-tracker-page";
import { SignUp } from "./pages/sign-up";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route path="/routine" element={<HomePage />} />
          <Route path="/create-routine" element={<CreateWorkoutPage />} />
          <Route
            path="/edit-workout/:workout_id"
            element={<EditWorkoutPage />}
          />
          <Route path="/tracker" element={<TrackerPage />} />
          <Route
            path="/tracker/workout/:workout_id"
            element={<TrackerWorkoutPage />}
          />
          <Route path="/routine/:workout_id" element={<ViewWorkoutPage />} />
        </Route>
        <Route path="/" element={<Navigate to="routine" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
