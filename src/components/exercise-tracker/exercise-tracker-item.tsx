import { FormLabel } from "@mui/material";
import { useState } from "react";
import ExerciseSetItem from "./exercise-set-item";

const ExerciseTrackerItem = ({
  exercise_name,
  sets,
  reps,
  exercise_id,
  setExerciseTrackList,
  workout_exercise_id,
}: any) => {
  const [notes, setNotes] = useState("");

  const addItem = (
    session_exercise_id: any,
    localReps: any,
    localWeight: any,
    localRPE: any
  ) => {
    setExerciseTrackList((prevList: any) => {
      const existingEntryIndex = prevList.findIndex(
        (entry: any) => entry.session_exercise_id === session_exercise_id
      );

      const newItem = {
        session_exercise_id,
        workout_exercise_id,
        localReps,
        localWeight,
        localRPE,
      };

      if (existingEntryIndex !== -1) {
        return prevList.map((entry: any, index: any) =>
          index === existingEntryIndex ? newItem : entry
        );
      } else {
        return [...prevList, newItem];
      }
    });
  };

  const deleteItem = (exercise_uuid: any) => {
    setExerciseTrackList((previousExerciseList: any[]) => {
      const filteredList = previousExerciseList.filter(
        (data: any) => data.session_exercise_id !== exercise_uuid
      );
      return filteredList;
    });
  };

  return (
    <div className="flex align-middle justify-center flex-col h-auto border-[#ECEDF0] dark:border-black border border-solid bg-white dark:bg-[#2B2C32] rounded-md lg:p-10 p-5 gap-5 mb-6">
      <div className="w-full h-auto flex flex-row justify-between">
        <p className="font-medium text-lg text-left">{exercise_name}</p>
      </div>
      <FormLabel className="w-full h-auto">
        <div className="min-w-2 h-auto text-center items-start flex flex-col justify-start mb-5 dark:text-white">
          <p>Notes</p>
          <input
            type="text"
            aria-label="notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Add notes here..."
            className="w-full h-10  border border-solid border-[#e5e7eb] dark:border-black bg-white dark:bg-[#2B2C32] rounded-md text-black p-5 dark:text-white"
          />
        </div>
        <div className="flex flex-row justify-between">
          <div className="w-10 h-10 flex justify-center dark:text-white">Sets</div>
          <div className="w-20 h-10 flex justify-center dark:text-white">Reps</div>
          <div className="w-20 h-10 flex justify-center dark:text-white">Weight</div>
          <div className="w-20 h-10 flex justify-center dark:text-white">RPE</div>
          <div className="w-10 h-10 flex justify-center dark:text-white"></div>
        </div>
        <div className="gap-4 flex flex-col">
          {[...Array(sets)].map((_, i) => {
            return (
              <ExerciseSetItem
                exercise_id={exercise_id}
                key={i}
                i={i}
                reps={reps}
                setExerciseTrackList={addItem}
                removeTrackedExercise={deleteItem}
              />
            );
          })}
        </div>
      </FormLabel>
    </div>
  );
};

export default ExerciseTrackerItem;
