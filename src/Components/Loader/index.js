import { CircularProgress } from "@mui/material";
import React from "react";

const Loader = () => {
  return (
    <div style={styles.overlay}>
      <div style={styles.loader}>
        <CircularProgress size="6rem"/>
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0, 0, 0, 0.5)", // Dark transparent background
    backdropFilter: "blur(5px)", // Blur effect for the background
    zIndex: 1000, // Ensure it's above other elements
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  loader: {
    // background: "rgba(0, 0, 0, 0.8)", // Darker background for the loader box
    color: "#fff",
    padding: "1rem 2rem",
    borderRadius: "8px",
    textAlign: "center",
    fontSize: "1.5rem",
    fontWeight: "bold",
  },
};

export default Loader;
