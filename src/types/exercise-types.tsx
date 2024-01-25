export interface ExerciseProps {
  exercise_id: string;
  exercise_name: string;
}

export interface ExercisePropsForLocal {
  exercise_name?: string;
  exercise_id?: string;
  addExercise: (newExercise: ExerciseProps) => void;
}

export interface WorkoutExerciseProps {
  exercise_name: string;
  exercise_sets: number;
  exercise_reps: number;
  exercise_weight: number;
}
