import { useState } from "react";

type exerciseSetItemProps = {
  i: any;
  reps: any;
  setExerciseTrackList: any;
  exercise_id: any;
};
const ExerciseSetItem = ({
  i,
  reps,
  setExerciseTrackList,
  exercise_id,
}: exerciseSetItemProps) => {
  const [localReps, setReps] = useState("");
  const [localWeight, setWeight] = useState("");
  const [localRPE, setRPE] = useState("");

  return (
    <div className="flex flex-row justify-between pb-4">
      <div className="w-auto h-auto">
        <div
          className="w-10 h-10 flex items-center justify-center border border-solid border-[#e5e7eb] rounded-md text-black text-center"
          onClick={() => {
            setExerciseTrackList(exercise_id, localReps, localWeight, localRPE);
          }}
        >
          {i + 1}
        </div>
      </div>
      <div className="w-auto h-auto">
        <input
          type="number"
          aria-label="reps"
          placeholder={reps}
          value={localReps}
          onChange={(e) => {
            setReps(e.target.value);
          }}
          className="w-20 h-10 border border-solid border-[#e5e7eb] rounded-md text-black text-center bg-[#F9FAFB]"
        />
      </div>
      <div className="w-auto h-auto">
        <input
          type="number"
          aria-label="reps"
          placeholder={"0"}
          value={localWeight}
          onChange={(e) => {
            setWeight(e.target.value);
          }}
          className="w-20 h-10 border border-solid border-[#e5e7eb] rounded-md text-black text-center bg-[#F9FAFB]"
        />
      </div>
      <div className="w-auto h-auto">
        <input
          type="number"
          aria-label="reps"
          placeholder={"-"}
          value={localRPE}
          onChange={(e) => {
            setRPE(e.target.value);
          }}
          className="w-20 h-10 border border-solid border-[#e5e7eb] rounded-md text-black text-center bg-[#F9FAFB]"
        />
      </div>
    </div>
  );
};

export default ExerciseSetItem;
