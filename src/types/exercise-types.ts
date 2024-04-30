export interface ExerciseProps {
  exercise_id: string;
  exercise_name: string;
  exercise_muscle: string;
}

export interface EditExerciseProps {
  exercises: any;
  reps: number;
  sets: number;
  rest: number;
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
  exercise_muscle?: string;
  addExercise?: (newExercise: any) => void;
  removeExercise?: (exercise_id: string) => void;
}

export interface ExerciseEditorItemProps {
  exercise_name: string;
  exercise_id?: string;
  removeExercise?: (exercise_id: string) => void;
  updateExerciseDetails?: any;
  sets?: number;
  reps?: number;
  rest?: number;
}

export interface WorkoutExerciseProps {
  exercise_name: string;
  exercise_sets: number;
  exercise_reps: number;
  exercise_rest: number;
}
