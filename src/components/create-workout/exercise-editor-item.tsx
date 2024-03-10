import { FormLabel, MenuItem, Select } from "@mui/material";
import { Unstable_NumberInput as NumberInput } from "@mui/base/Unstable_NumberInput";

import { ExercisePropsForLocal } from "../../types/exercise-types";
import { useState } from "react";

const ExerciseEditorItem = ({ exercise_name }: ExercisePropsForLocal) => {
  const [restTime, setRestTime] = useState(0);
  const [sets, setSets] = useState(0);
  const [reps, setReps] = useState(0);
  const [notes, setNotes] = useState("");

  function handleChange(event: any) {
    setRestTime(event.target.value);
  }

  return (
    <div className=" flex align-middle justify-center flex-col h-auto border-[#ECEDF0] border border-solid bg-white rounded-md p-10 gap-5">
      <div className="w-full h-auto">
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
          <div className="w-auto h-auto">
            <p>Sets</p>
            <input
              type="number"
              aria-label="sets"
              value={sets}
              onChange={(e) => setSets(Number(e.target.value))}
              className="w-20 h-10 border border-solid border-[#e5e7eb] rounded-md text-black text-center"
            />
          </div>
          <div className="w-auto h-auto">
            <p>Reps</p>
            <input
              type="number"
              aria-label="reps"
              value={reps}
              onChange={(e) => setReps(Number(e.target.value))}
              className="w-20 h-10 border border-solid border-[#e5e7eb] rounded-md text-black text-center"
            />
          </div>
          <div className="w-auto h-auto">
            <p>Rest Timer</p>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={restTime}
              onChange={handleChange}
              defaultChecked={true}
              className="min-w-2 h-10 border border-solid border-[#e5e7eb] rounded-md text-black"
            >
              <MenuItem value={60}>1:00</MenuItem>
              <MenuItem value={120}>2:00</MenuItem>
              <MenuItem value={180}>3:00</MenuItem>
            </Select>
          </div>
        </div>
      </FormLabel>
    </div>
  );
};

export default ExerciseEditorItem;
