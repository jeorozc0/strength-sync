import { create } from "zustand";
import { GeneratedWorkout, WorkoutState } from "../../types/workout-types"; // Assume you've put the types in a separate file

export const useWorkoutStore = create<WorkoutState>((set) => ({
  generatedWorkout: null,
  isFromAI: false,
  setGeneratedWorkout: (workout: GeneratedWorkout) =>
    set({ generatedWorkout: workout }),
  setIsFromAI: (value: boolean) => set({ isFromAI: value }),
  clearWorkoutState: () => set({ generatedWorkout: null, isFromAI: false }),
}));
