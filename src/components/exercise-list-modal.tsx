import { Button } from "@mui/material";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "../components/ui/dialog";
import useExercise from "../hooks/useExercise";
import ExerciseItem from "./exercise-item";
import LoadingComponent from "./loading-component/loading-component";
import { ExerciseProps, ExercisePropsForLocal } from "../types/exercise-types";

export function ExcersiceListModal({ addExercise }: ExercisePropsForLocal) {
  const { data: exercise, error, isLoading } = useExercise();
  if (error) {
    return <h1>This is an error</h1>;
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="contained" size="large">
          Add Exercise
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] h-4/5">
        <DialogHeader>
          <DialogTitle>Exercise List</DialogTitle>
        </DialogHeader>
        <DialogClose asChild>
          <div className="flex flex-col w-full h-full overflow-y-scroll gap-5 px-4 pt-4">
            {isLoading && <LoadingComponent />}

            {exercise?.map((exercise: ExerciseProps) => (
              <ExerciseItem
                key={exercise.exercise_id}
                exercise_name={exercise.exercise_name}
                exercise_muscle={exercise.exercise_muscle}
                exercise_id={exercise.exercise_id}
                addExercise={addExercise}
                handleClose={() => {}}
              />
            ))}
          </div>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}
