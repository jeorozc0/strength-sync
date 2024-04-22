import { useMutation, useQuery } from "react-query";
import {
  createWorkoutExercise,
  deletWorkoutExercise,
  fetchExercise,
  replaceWorkoutExercise,
} from "../services/api/exercise-api";

export default function useExercise() {
  return useQuery("exercise", () => fetchExercise());
}

export function useCreateWorkoutExercise() {
  return useMutation({
    mutationFn: (exercise: any[]) => createWorkoutExercise(exercise),
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
    mutationFn: ({ workout_id }: { workout_id: any }) =>
      deletWorkoutExercise(workout_id),
  });
}
