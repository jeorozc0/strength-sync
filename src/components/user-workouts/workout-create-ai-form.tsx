import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import { styled } from "@mui/material/styles";
import { useCreateWorkoutWithAi } from "../../hooks/useExercise";

// Custom Paper component with wider width
const CustomPaper = styled("div")({
  width: "600px",
  height: "300px",
});

export default function WorkoutCreateAIForm() {
  const [open, setOpen] = React.useState(false);
  const {mutateAsync: createWorkoutWithAi} = useCreateWorkoutWithAi()

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries(formData.entries());
    const muscle = formJson.muscle;
    const exercises = formJson.exercises;
    const sets = formJson.sets;
    console.log(createWorkoutWithAi())
    console.log(muscle, exercises, sets);
    handleClose();
    
  };

  return (
    <React.Fragment>
      <button
        onClick={handleClickOpen}
        className="flex align-middle justify-center border-[#ECEDF0] border border-solid bg-white hover:bg-[#F9FAFB] rounded-md cursor-pointer lg:p-3 p-5"
      >
        <p className="font-medium text-sm text-center">Generate Routine</p>
      </button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: CustomPaper,
        }}
      >
        <DialogTitle sx={{ display: "flex", justifyContent: "center" }}>
          Workout Generation
        </DialogTitle>
        <form onSubmit={handleSubmit}>
          <DialogContent>
            <div className="flex gap-6 flex-col">
              <div className="flex gap-4">
                <FormControl fullWidth>
                  <InputLabel variant="standard" htmlFor="uncontrolled-native">
                    Muscle Group
                  </InputLabel>
                  <NativeSelect
                    title="Muscle"
                    defaultValue={""}
                    inputProps={{
                      name: "muscle",
                      id: "uncontrolled-native",
                    }}
                  >
                    <option value={"Chest"}>Chest</option>
                    <option value={"Back"}>Back</option>
                    <option value={"Legs"}>Legs</option>
                    <option value={"Shoulder"}>Shoulder</option>
                    <option value={"Biceps"}>Biceps</option>
                    <option value={"Triceps"}>Triceps</option>
                    <option value={"Calves"}>Calves</option>
                    <option value={"Forearms"}>Forearms</option>
                    <option value={"Core"}>Core</option>
                  </NativeSelect>
                </FormControl>
              </div>
              <div className="flex gap-4">
                <FormControl fullWidth>
                  <InputLabel
                    variant="standard"
                    htmlFor="uncontrolled-native-exercises"
                  >
                    Number of exercises
                  </InputLabel>
                  <NativeSelect
                    title="Exercises"
                    defaultValue={4}
                    inputProps={{
                      name: "exercises",
                      id: "uncontrolled-native-exercises",
                    }}
                  >
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                    <option value={6}>6</option>
                    <option value={7}>7</option>
                    <option value={8}>8</option>
                  </NativeSelect>
                </FormControl>
                <FormControl fullWidth>
                  <InputLabel
                    variant="standard"
                    htmlFor="uncontrolled-native-sets"
                  >
                    Sets per exercise
                  </InputLabel>
                  <NativeSelect
                    title="sets"
                    defaultValue={2}
                    inputProps={{
                      name: "sets",
                      id: "uncontrolled-native-sets",
                    }}
                  >
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                  </NativeSelect>
                </FormControl>
              </div>
            </div>
          </DialogContent>
          <DialogActions sx={{ display: "flex", justifyContent: "center" }}>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit">Generate</Button>
          </DialogActions>
        </form>
      </Dialog>
    </React.Fragment>
  );
}
