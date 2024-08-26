export interface WorkoutProps {
  workout_id?: string;
  workout_name?: string;
  user_id?: any;
  session_id?: any;
  workout_session_id?: any;
  date?: any;
}

export interface Exercise {
  exercise_name: string;
  exercise_id: string;
  sets: string; // Note: This is a string, not a number
}

export interface GeneratedWorkout {
  muscle: string;
  exercises: Exercise[];
}

export interface WorkoutState {
  generatedWorkout: GeneratedWorkout | null;
  isFromAI: boolean;
  setGeneratedWorkout: (workout: GeneratedWorkout) => void;
  setIsFromAI: (value: boolean) => void;
  clearWorkoutState: () => void;
}
