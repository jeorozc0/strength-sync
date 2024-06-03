import { useMutation, useQuery } from "react-query";
import {
  createWorkoutExercise,
  createWorkoutExerciseSession,
  deleteWorkoutExercise,
  fetchExercise,
  fetchExerciseSession,
  replaceWorkoutExercise,
} from "../services/api/exercise-api";

export default function useExercise() {
  return useQuery("exercise", () => fetchExercise());
}

export function useExerciseSession(session_id: any) {
  return useQuery(["exercisesession", session_id], () =>
    fetchExerciseSession(session_id)
  );
}

export function useCreateWorkoutExercise() {
  return useMutation({
    mutationFn: (exercise: any[]) => createWorkoutExercise(exercise),
  });
}

export function useCreateWorkoutExerciseSession() {
  return useMutation({
    mutationFn: (exercise: any[]) => createWorkoutExerciseSession(exercise),
  });
}

export function useUpdateWorkoutExercise() {
  return useMutation({
    mutationFn: ({
      exercise,
      workout_id,
    }: {
      exercise: any;
      workout_id: any;
    }) => replaceWorkoutExercise(exercise, workout_id),
  });
}

export function useDeleteWorkoutExercise() {
  return useMutation({
    mutationFn: (deletedExercises: any) =>
      deleteWorkoutExercise(deletedExercises),
  });
}
