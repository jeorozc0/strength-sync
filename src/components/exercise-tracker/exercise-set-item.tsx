import { useEffect, useState } from "react";
import CheckIcon from "@mui/icons-material/Check";
import { v4 as uuidv4 } from "uuid";

type exerciseSetItemProps = {
  i: any;
  reps: any;
  setExerciseTrackList: any;
  exercise_id: any;
  removeTrackedExercise: any;
};
const ExerciseSetItem = ({
  i,
  reps,
  setExerciseTrackList,
  exercise_id,
  removeTrackedExercise,
}: exerciseSetItemProps) => {
  const [uuid, setUUID] = useState("");
  const [localReps, setReps] = useState("");
  const [localWeight, setWeight] = useState("");
  const [localRPE, setRPE] = useState("");
  const [logged, setLogged] = useState(false);

  useEffect(() => {
    setUUID(uuidv4());
  }, []);

  
  const defaultReps = reps || "0";
  const defaultWeight = "0";
  const defaultRPE = "0";

  function logExercise() {
    setLogged(!logged);
    if (logged) {
      removeTrackedExercise(uuid);
    } else {
      setExerciseTrackList(
        uuid,
        exercise_id,
        localReps || defaultReps,
        localWeight || defaultWeight,
        localRPE || defaultRPE
      );
    }
  }

  return (
    <div className={`flex flex-row justify-between`}>
      <div className="w-auto h-auto">
        <div className="w-10 h-10 flex items-center justify-center border border-solid border-[#e5e7eb] rounded-md text-black text-center">
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
          aria-label="rpe"
          placeholder={"-"}
          value={localRPE}
          onChange={(e) => {
            setRPE(e.target.value);
          }}
          className="w-20 h-10 border border-solid border-[#e5e7eb] rounded-md text-black text-center bg-[#F9FAFB]"
        />
      </div>
      <button
        title="log"
        className={`w-10 h-10 border border-solid border-[#e5e7eb] rounded-md text-black text-center transition-all duration-200 ${
          logged ? "bg-green-400 text-white" : "bg-white"
        } `}
        onClick={logExercise}
      >
        <CheckIcon></CheckIcon>
      </button>
    </div>
  );
};

export default ExerciseSetItem;
