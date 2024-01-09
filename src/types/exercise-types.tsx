export interface ExerciseProps {
  exercise_id: number;
  exercise_name: string;
  exercise_description: string;
}

export interface ExercisePropsForLocal {
  exercise_name?: string;
  addExercise: (newExercise: ExerciseProps) => void;
}

export interface WorkoutExerciseProps {
  exercise_name: string;
  exercise_sets: number;
  exercise_reps: number;
  exercise_weight: number;
}
