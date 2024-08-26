import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import { useWorkoutStore } from "../../services/stores/workout-store";
import { GeneratedWorkout } from "../../types/workout-types";
import AILoadingStars from "./ai-loading-screen";

const muscleGroups = [
  "Chest",
  "Back",
  "Legs",
  "Shoulder",
  "Biceps",
  "Triceps",
  "Calves",
  "Forearms",
  "Core",
];
const exerciseCounts = Array.from({ length: 8 }, (_, i) => i + 1);
const setCounts = Array.from({ length: 4 }, (_, i) => i + 1);

interface WorkoutCreateAIFormProps {
  createWorkoutWithAi: (params: {
    muscle: string;
    exercises: number;
    sets: number;
  }) => Promise<GeneratedWorkout>;
}

export default function WorkoutCreateAIForm({
  createWorkoutWithAi,
}: WorkoutCreateAIFormProps) {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { setGeneratedWorkout, setIsFromAI } = useWorkoutStore();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const params = {
      muscle: formData.get("muscle") as string,
      exercises: parseInt(formData.get("exercises") as string, 10),
      sets: parseInt(formData.get("sets") as string, 10),
    };

    setIsLoading(true);
    createWorkoutWithAi(params)
      .then((generatedWorkout) => {
        console.log("Generated workout:", generatedWorkout);
        setGeneratedWorkout(generatedWorkout);
        setIsFromAI(true);
        setOpen(false);
        navigate("/create-routine");
      })
      .catch((error) => {
        console.error("Failed to generate workout:", error);
        const errorMessage =
          error instanceof Error
            ? error.message
            : "An unexpected error occurred";
        toast.error(`Failed to generate workout: ${errorMessage}`);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        title="Generate Workout"
        aria-label="Generate Workout"
        className="flex items-center justify-center border border-[#ECEDF0] dark:border-black bg-white hover:bg-[#F9FAFB] dark:bg-[#2B2C32] dark:hover:bg-[#353740] rounded-md cursor-pointer lg:p-3 p-5"
      >
        <AutoAwesomeIcon className="text-black dark:text-white mr-2" />
        <span className="text-black dark:text-white">Generate new routine</span>
      </button>
      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-[#2B2C32] p-6 rounded-lg w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4 text-center text-black dark:text-white">
              Workout Generation
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="muscle"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                >
                  Muscle Group
                </label>
                <select
                  id="muscle"
                  name="muscle"
                  defaultValue=""
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                >
                  <option value="" disabled>
                    Select a muscle group
                  </option>
                  {muscleGroups.map((group) => (
                    <option key={group} value={group}>
                      {group}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label
                  htmlFor="exercises"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                >
                  Number of exercises
                </label>
                <select
                  id="exercises"
                  name="exercises"
                  defaultValue={4}
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                >
                  {exerciseCounts.map((count) => (
                    <option key={count} value={count}>
                      {count}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label
                  htmlFor="sets"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                >
                  Sets per exercise
                </label>
                <select
                  id="sets"
                  name="sets"
                  defaultValue={2}
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                >
                  {setCounts.map((count) => (
                    <option key={count} value={count}>
                      {count}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex justify-end space-x-2 mt-4">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:hover:bg-gray-600"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-400"
                >
                  Generate
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      {isLoading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="text-center">
            <AILoadingStars />
            <p className="text-white mt-4">Generating AI Workout...</p>
          </div>
        </div>
      )}
    </>
  );
}
