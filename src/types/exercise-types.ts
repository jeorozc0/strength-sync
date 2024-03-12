export interface ExerciseProps {
  exercise_id: string;
  exercise_name: string;
  
}

export interface ExercisePropsForAPI {
  exercise_id: string;
  workout_id: number;
  sets: number;
  reps: number;
  rest: number;
}

export interface ExercisePropsForLocal {
  exercise_name?: string;
  exercise_id?: string;
  exercise_description?: string;
  addExercise?: (newExercise: ExerciseProps) => void;
  removeExercise?: (exercise_id: string) => void;
}

export interface ExerciseEditorItemProps {
  exercise_name: string;
  exercise_id: string;
  removeExercise: (exercise_id: string) => void;
}

export interface WorkoutExerciseProps {
  exercise_name: string;
  exercise_sets: number;
  exercise_reps: number;
  exercise_rest: number;
}
