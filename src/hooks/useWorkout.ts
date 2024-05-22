import { useMutation, useQuery, useQueryClient } from "react-query";
import { WorkoutProps } from "../types/workout-types";
import {
  createWorkout,
  createWorkoutSession,
  deleteWorkout,
  deleteWorkoutSession,
  editWorkout,
  FetchWorkout,
  FetchWorkoutSession,
} from "../services/api/workout-api";
import { useAuth } from "./useAuth";

export function useWorkout() {
  const { user } = useAuth();

  return useQuery(["workout"], () => FetchWorkout(user?.id));
}

export function useWorkoutSession() {
  const { user } = useAuth();

  return useQuery(["workout_session"], () => FetchWorkoutSession(user?.id));
}

export function useCreateWorkout() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ workout_name, user_id }: WorkoutProps) =>
      createWorkout({ workout_name, user_id }),
    onSuccess: () => {
      queryClient.invalidateQueries("workout");
    },
  });
}

export function useCreateWorkoutSession() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ workout_id, user_id }: WorkoutProps) =>
      createWorkoutSession({ workout_id, user_id }),
    onSuccess: () => {
      queryClient.invalidateQueries("workout_session");
    },
  });
}

export function useDeleteWorkoutSession() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (session_id: number) => deleteWorkoutSession(session_id),
    onSuccess: () => {
      queryClient.invalidateQueries("workout_session");
    },
  });
}

export function useEditWorkout() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (workout: WorkoutProps) => editWorkout(workout),
    onSuccess: () => {
      queryClient.invalidateQueries("workout");
    },
  });
}

export function useDeleteWorkout() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (workout_id: number) => deleteWorkout(workout_id),
    onSuccess: () => {
      queryClient.invalidateQueries("workout");
    },
  });
}
