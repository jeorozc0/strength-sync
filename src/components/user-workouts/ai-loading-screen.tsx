// LoadingScreen.tsx
import React from "react";
import { dotSpinner } from "ldrs";
import { styled } from "@mui/material/styles";

const LoadingContainer = styled("div")({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "rgba(0, 0, 0, 0.7)",
  zIndex: 9999,
});

const LoadingText = styled("div")({
  marginTop: 20,
  color: "#fff",
  fontSize: 18,
  fontWeight: "bold",
});

// Default values shown

const LoadingScreen: React.FC = () => {
  dotSpinner.register();
  return (
    <LoadingContainer>
      <div className="flex flex-col items-center">
        <l-dot-spinner size="60" speed="1" color="white"></l-dot-spinner>
        <LoadingText>Generating AI Workout...</LoadingText>
      </div>
    </LoadingContainer>
  );
};

export default LoadingScreen;
