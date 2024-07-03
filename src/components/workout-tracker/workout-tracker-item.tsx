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
        className="flex gap-5 flex-col border-[#ECEDF0] dark:border-black border border-solid bg-white dark:bg-[#2B2C32] h-max w-11/12 lg:w-72 rounded-md p-6"
      >
        <div className="flex align-middle justify-center w-full border-[#ECEDF0] dark:border-black border border-solid bg-white hover:bg-[#F9FAFB] dark:bg-[#2B2C32] dark:hover:bg-[#353740] rounded-md cursor-pointer lg:p-3 p-5">
          <p className="font-medium text-sm text-center">Track New Routine</p>
        </div>
      </button>
      <SimpleDialog workouts={workouts} open={open} onClose={handleClose} />
    </>
  );
};

export default RoutineTrackerCreate;
