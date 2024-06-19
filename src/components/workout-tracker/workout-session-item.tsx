import React, { useState } from "react";
import { WorkoutProps } from "../../types/workout-types";
import { IconButton, Menu, MenuItem } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useDeleteWorkoutSession } from "../../hooks/useWorkout";
import { useWorkoutName } from "../../hooks/useWorkoutById";
import moment from "moment";
import ExericeSessionList from "./exercise-session-list";
import { useExerciseSession } from "../../hooks/useExercise";

interface SessionExercise {
  exercise_id: number;
  session_exercises: any[];
  session_id: string;
}

const WorkoutSessionItem = ({
  workout_session_id,
  workout_id,
  date,
}: WorkoutProps) => {
  const { mutateAsync: deleteWorkout } = useDeleteWorkoutSession();
  const { data: workout } = useWorkoutName({ workout_id });
  const { data: workoutExercises } = useExerciseSession(workout_session_id);
  const fmtDate = moment(date).format("MM/DD/YY");
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  function handleClick(event: any) {
    event.stopPropagation();
    event.preventDefault();
    setAnchorEl(event.currentTarget);
  }

  function handleClose(event: any) {
    event.stopPropagation();
    event.preventDefault();
    setAnchorEl(null);
  }

  function removeWorkout(event: any) {
    event.stopPropagation();
    deleteWorkout(workout_session_id);
    handleClose(event);
  }
  return (
    <div className=" flex flex-col align-middle justify-center h-auto border-[#ECEDF0] border border-solid bg-white rounded-md p-5">
      <div className="w-full h-full flex justify-between align-middle">
        <p className="font-medium text-xl">
          {workout?.[0]?.workout_name}
          <span className="font-medium text-base"> ({fmtDate})</span>
        </p>

        <IconButton
          aria-label="more"
          id="long-button"
          aria-controls={open ? "long-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-haspopup="true"
          onClick={handleClick}
          size="small"
          className="z-20"
        >
          <MoreHorizIcon />
        </IconButton>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={removeWorkout}>Remove Workout</MenuItem>
        </Menu>
      </div>
      <div className="flex flex-col gap-8">
        {workoutExercises?.map((exercise: SessionExercise, index: number) => (
          <ExericeSessionList
            key={index}
            exercise_id={exercise.exercise_id}
            session_exercises={exercise.session_exercises}
          />
        ))}
      </div>
    </div>
  );
};

export default WorkoutSessionItem;
