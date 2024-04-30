import { useWorkout } from "../../hooks/useWorkout";
import SimpleDialog from "./workout-tracker-dialog";
import { useState } from "react";

const RoutineTrackerCreate = () => {
  const { data: workouts } = useWorkout();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <button
        onClick={handleClickOpen}
        className="flex gap-5 flex-col border-[#ECEDF0] border border-solid bg-white h-max w-72 rounded-md p-6"
      >
        <div className="flex align-middle justify-center h-10 w-full border-[#ECEDF0] border border-solid bg-white hover:bg-[#F9FAFB] rounded-md cursor-pointer px-px py-1.5">
          <p className="font-medium text-sm h-full align-middle">
            Track New Routine
          </p>
        </div>
      </button>
      <SimpleDialog workouts={workouts} open={open} onClose={handleClose} />
    </>
  );
};

export default RoutineTrackerCreate;
