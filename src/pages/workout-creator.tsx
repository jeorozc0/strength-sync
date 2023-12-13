import React from "react";
import WorkoutEditor from "../modules/ui/components/routine-creator/workout-editor";
import WorkoutListAdd from "../modules/ui/components/routine-creator/workout-list-add";

const WorkoutCreator = () => {
  return (
    <div className="min-h-screen py-10 flex items-center gap-5 flex-col lg:flex-row lg:justify-center lg:items-start bg-[#F9FAFB] ">
      <WorkoutEditor />
      <WorkoutListAdd />
    </div>
  );
};

export default WorkoutCreator;
