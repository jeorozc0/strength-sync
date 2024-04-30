import { FormLabel } from "@mui/material";

import { ExerciseEditorItemProps } from "../../types/exercise-types";
import { useState } from "react";
import ExerciseSetItem from "./exercise-set-item";

const ExerciseTrackerItem = ({
  exercise_name,
  sets,
  reps,
}: ExerciseEditorItemProps) => {
  const [notes, setNotes] = useState("");

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
        </div>
        {[...Array(sets)].map((e, i) => {
          return <ExerciseSetItem i={i} reps={reps} />;
        })}
      </FormLabel>
    </div>
  );
};

export default ExerciseTrackerItem;
