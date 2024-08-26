import { Link } from "react-router-dom";
import WorkoutCreateAIForm from "./workout-create-ai-form";
import { useCreateWorkoutWithAi } from "../../hooks/useExercise";

interface CreateAiParams {
  muscle: string;
  exercises: number;
  sets: number;
}

const RoutineCreate = () => {
  const { mutateAsync: createWorkoutWithAi } = useCreateWorkoutWithAi();
  async function createAi({ muscle, exercises, sets }: CreateAiParams) {
    try {
      const response = await createWorkoutWithAi({
        muscle,
        exercises,
        sets,
      });
      return response;
    } catch (err) {
      console.error("Error generating workout:", err);
      throw err; // Re-throw the error so it can be handled by the caller
    }
  }
  return (
    <div className="flex gap-5 flex-col border-[#ECEDF0] dark:border-black border border-solid bg-white dark:bg-[#2B2C32] h-max w-11/12 lg:w-72 rounded-md p-6">
      <Link
        to={"/create-routine"}
        className=" flex align-middle justify-center border-[#ECEDF0] dark:border-black border border-solid bg-white hover:bg-[#F9FAFB] dark:bg-[#2B2C32] dark:hover:bg-[#353740] rounded-md cursor-pointer lg:p-3 p-5"
      >
        <p className="font-medium text-sm text-center">New routine</p>
      </Link>
      <WorkoutCreateAIForm createWorkoutWithAi={createAi} />
    </div>
  );
};

export default RoutineCreate;
