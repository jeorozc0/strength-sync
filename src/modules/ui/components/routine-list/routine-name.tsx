import React from "react";
import { RoutineProps } from "../../../types";
import { IconButton } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const RoutineName = ({ name }: RoutineProps) => {
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div className=" flex align-middle justify-center  h-15 border-[#ECEDF0] border-2 border-solid bg-white hover:bg-[#F9FAFB] rounded-md p-5 cursor-pointer">
      <div className="w-full h-full flex justify-between align-middle">
        <p className="font-medium text-lg">{name}</p>
        <IconButton
          aria-label="more"
          id="long-button"
          aria-controls={open ? "long-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-haspopup="true"
          onClick={handleClick}
          size="small"
        >
          <MoreHorizIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default RoutineName;
