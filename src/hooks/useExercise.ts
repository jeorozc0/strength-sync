import { useMutation, useQuery, useQueryClient } from "react-query";
import {
  createWorkoutExercise,
  fetchExercise,
} from "../services/api/exercise-api";

export default function useExercise() {
  return useQuery("exercise", () => fetchExercise());
}

export function useCreateWorkoutExercise() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (exercise: any[]) => createWorkoutExercise(exercise),
    onSuccess: () => {
      queryClient.invalidateQueries("exercise");
    },
  });
}
