import { FormLabel } from "@mui/material";
import { useState } from "react";
import ExerciseSetItem from "./exercise-set-item";

const ExerciseTrackerItem = ({
  exercise_name,
  sets,
  reps,
  exercise_id,
  setExerciseTrackList,
  workout_exercise_id
}: any) => {
  const [notes, setNotes] = useState("");

  const addItem = (
    session_exercise_id: any,
    exercise_id: any,
    localReps: any,
    localWeight: any,
    localRPE: any,
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
    <div className=" flex align-middle justify-center flex-col h-auto border-[#ECEDF0] border border-solid bg-white rounded-md p-10 gap-5 mb-6">
      <div className="w-full h-auto flex flex-row justify-between">
        <p className="font-medium text-lg text-left">{exercise_name}</p>
      </div>
      <FormLabel className="w-full h-auto">
        <div className="w-auto h-auto items-start flex flex-col justify-start mb-5">
          <p>Notes</p>
          <input
            type="text"
            aria-label="notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Add notes here..."
            className="w-full h-10 border border-solid border-[#e5e7eb] rounded-md text-black p-5"
          />
        </div>
        <div className="flex flex-row justify-between">
          <div className="w-10 h-10 flex justify-center">Sets</div>
          <div className="w-20 h-10 flex justify-center">Reps</div>
          <div className="w-20 h-10 flex justify-center">Weight</div>
          <div className="w-20 h-10 flex justify-center">RPE</div>
          <div className="w-10 h-10 flex justify-center"></div>
        </div>
        <div className="gap-4 flex flex-col">
          {[...Array(sets)].map((e, i) => {
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
