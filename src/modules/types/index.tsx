export interface RoutineProps {
  name: string;
}

export interface ExercisePropsForLocal {
  exercise_name?: string;
  addExercise: (newExercise: ExerciseProps) => void;
}

export interface WorkoutProps {
  workout_id: number;
  workout_name: string;
  workout_description: string;
}

export interface ExerciseProps {
  exercise_id: number;
  exercise_name: string;
  exercise_description: string;
}
