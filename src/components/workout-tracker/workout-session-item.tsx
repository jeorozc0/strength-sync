import React, { useState } from "react";
import { WorkoutProps } from "../../types/workout-types";
import { IconButton, Menu, MenuItem } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
// import { useNavigate } from "react-router-dom";
import { useDeleteWorkoutSession } from "../../hooks/useWorkout";
import { useWorkoutName } from "../../hooks/useWorkoutById";
import moment from "moment";
import ExericeSessionList from "./exercise-session-list";
import { useExerciseSession } from "../../hooks/useExercise";

const WorkoutSessionItem = ({
  workout_session_id,
  workout_id,
  date,
}: WorkoutProps) => {
  const { mutateAsync: deleteWorkout } = useDeleteWorkoutSession();
  const { data: workout } = useWorkoutName({ workout_id });
  const { data: workoutExercises } = useExerciseSession(workout_session_id);
  console.log(workoutExercises);

  const fmtDate = moment(date).format("MM/DD/YY");
  // const navigate = useNavigate();
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

  // function editWorkout(event: any) {
  //   event.stopPropagation();
  //   navigate(`/edit-workout/${workout_id}`);
  //   handleClose(event);
  // }

  return (
    <div className=" flex flex-col align-middle justify-center h-auto border-[#ECEDF0] border border-solid bg-white rounded-md p-5">
      <div className="w-full h-full flex justify-between align-middle">
        <div className="flex flex-col">
          <p className="font-medium text-lg">{workout?.[0]?.workout_name}</p>
          <p className="font-medium text-base">{fmtDate}</p>
        </div>

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
          {/* <MenuItem onClick={editWorkout}>Edit Workout</MenuItem> */}
          <MenuItem onClick={removeWorkout}>Remove Workout</MenuItem>
        </Menu>
      </div>
      <hr className="h-0.5" />
      <div className="w-10 h-10 flex items-center justify-center text-black text-center">
        Set
      </div>
      {workoutExercises?.map((workoutExercise: any) => (
        <ExericeSessionList key={workoutExercise.session_exercise_id} />
      ))}
    </div>
  );
};

export default WorkoutSessionItem;
