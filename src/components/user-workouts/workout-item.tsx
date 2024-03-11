import React, { useState } from "react";
import { WorkoutProps } from "../../types/workout-types";
import { IconButton, Menu, MenuItem } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Link } from "react-router-dom";
import { useDeleteWorkout } from "../../hooks/useWorkout";

const WorkoutItem = ({ workout_name, workout_id }: WorkoutProps) => {
  const { mutateAsync: deleteWorkout } = useDeleteWorkout();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: any) => {
    event.stopPropagation();
    event.preventDefault();
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event: any) => {
    event.stopPropagation();
    event.preventDefault();
    setAnchorEl(null);
  };

  const removeWorkout = (event: any) => {
    event.stopPropagation();
    console.log("Removing workout with id: " + workout_id);
    deleteWorkout(workout_id as number);
    handleClose(event);
  };

  return (
    <Link
      to={`/routine/${workout_id}`}
      className=" flex align-middle justify-center  h-15 border-[#ECEDF0] border border-solid bg-white hover:bg-[#F9FAFB] rounded-md p-5 cursor-pointer"
    >
      <div className="w-full h-full flex justify-between align-middle">
        <p className="font-medium text-lg">{workout_name}</p>
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
    </Link>
  );
};

export default WorkoutItem;
