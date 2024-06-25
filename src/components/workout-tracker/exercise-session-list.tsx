import { useExerciseByID } from "../../hooks/useExercise";

interface SessionExerciseListProps {
  session_exercise_id: string;
  session_id: string;
  workout_exercise_id: string;
  reps_per_set: number;
  weight_per_set: number;
  rpe_per_set: number;
}
interface ExericeSessionListProps {
  exercise_id: number;
  session_exercises: SessionExerciseListProps[];
}

const ExericeSessionList = ({
  exercise_id,
  session_exercises,
}: ExericeSessionListProps) => {
  const { data } = useExerciseByID(exercise_id);
  const exerciseName = data?.[0]?.exercise_name;
  return (
    <div className={`flex flex-col w-auto h-auto `}>
      <h1 className="font-medium">{exerciseName}</h1>
      {session_exercises?.map((exercise: any, index: number) => (
        <div className="flex flex-row gap-2" key={index}>
          <div className=" w-10 h-10 flex items-center justify-center text-black text-center dark:text-white">
            {index + 1}.
          </div>
          <div className="font-medium w-auto h-10 flex items-center justify-center">
            {exercise.weight_per_set} lbs x {exercise.reps_per_set} reps @{" "}
            {10 - exercise.rpe_per_set} RIR
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExericeSessionList;
