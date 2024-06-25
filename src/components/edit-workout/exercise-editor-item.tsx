import { FormLabel, IconButton, Menu, MenuItem, Select } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { ExerciseEditorItemProps } from "../../types/exercise-types";
import { useState } from "react";
import { useTheme } from "../../hooks/useTheme";

const ExerciseEditorItem = ({
  exercise_name,
  removeExercise,
  exercise_id,
  updateExerciseDetails,
  sets,
  reps,
  rest,
}: ExerciseEditorItemProps) => {
  const theme = useTheme();
  const isDarkMode = theme.darkMode === "dark";
  const [localSets, setSets] = useState(sets?.toString() || "");
  const [localReps, setReps] = useState(reps?.toString() || "");
  const [localRestTime, setRest] = useState(rest);
  const [notes, setNotes] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  function handleChange(event: any) {
    setRest(event.target.value);
    updateExerciseDetails(
      exercise_id,
      Number(localSets),
      Number(localReps),
      event.target.value
    );
  }

  return (
    <div className="flex align-middle justify-center flex-col h-auto border-[#ECEDF0] dark:border-black border border-solid bg-white dark:bg-[#2B2C32] rounded-md p-10 gap-5 mb-6">
      <div className="w-full h-auto flex flex-row justify-between">
        <p className="font-medium text-lg text-left">{exercise_name}</p>
        <IconButton
          aria-label="more"
          id="long-button"
          aria-controls={open ? "long-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-haspopup="true"
          onClick={handleClick}
          size="small"
          className="dark:text-white"
        >
          <MoreVertIcon />
        </IconButton>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
          sx={{
            "& .MuiPaper-root": {
              backgroundColor: isDarkMode ? "#2B2C32" : "#FFFFFF",
            },
          }}
        >
          <MenuItem
            onClick={removeExercise}
            sx={{
              backgroundColor: isDarkMode ? "#2B2C32" : "#FFFFFF",
              "&:hover": {
                backgroundColor: isDarkMode ? "#353740" : "#F9FAFB",
              },
              color: isDarkMode ? "#FFFFFF" : "#000000",
            }}
          >
            Remove Workout
          </MenuItem>
        </Menu>
      </div>
      <FormLabel className="w-full h-auto">
        <div className="min-w-2 h-auto text-center items-start flex flex-col justify-start mb-5 dark:text-white">
          <p>Notes</p>
          <input
            type="text"
            aria-label="notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Add notes here..."
            className="w-full h-10  border border-solid border-[#e5e7eb] dark:border-black bg-white dark:bg-[#2B2C32] rounded-md text-black p-5 dark:text-white"
          />
        </div>
        <div className="flex flex-row justify-between">
          <div className="w-20 h-auto text-center dark:text-white">
            <p>Sets</p>
            <input
              type="number"
              aria-label="sets"
              value={localSets}
              onChange={(e) => {
                setSets(e.target.value);
                updateExerciseDetails(
                  exercise_id,
                  Number(e.target.value),
                  Number(localReps),
                  localRestTime || 0 // Provide a default value for localRestTime
                );
              }}
              className="w-20 h-10 border border-solid border-[#e5e7eb] dark:border-black bg-white dark:bg-[#2B2C32] rounded-md text-black p-5 dark:text-white text-center"
            />
          </div>
          <div className="w-20 h-auto text-center dark:text-white">
            <p>Reps</p>
            <input
              type="number"
              aria-label="reps"
              value={localReps}
              onChange={(e) => {
                setReps(e.target.value);
                updateExerciseDetails(
                  exercise_id,
                  Number(localSets),
                  Number(e.target.value),
                  localRestTime || 0
                );
              }}
              className="w-20 h-10 border border-solid border-[#e5e7eb] dark:border-black bg-white dark:bg-[#2B2C32] rounded-md text-black p-5 dark:text-white text-center"
            />
          </div>
          <div className="w-20 h-auto text-center dark:text-white">
            <p>Rest Timer</p>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={localRestTime}
              onChange={handleChange}
              defaultValue={0}
              className="min-w-2 h-10 border border-solid border-[#e5e7eb] dark:border-black rounded-md text-black dark:text-white"
            >
              <MenuItem value={0}>Off</MenuItem>
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
