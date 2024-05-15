import React, { useContext } from "react";
import { SnackbarContainer } from "./styles/snackbar.styles";
import DataStorageContext from "../../contexts/DataStorageContext";

const Snackbar = () => {
  const { snackbarMessage, isSnackbarOpen } = useContext(DataStorageContext);
  return (
    <SnackbarContainer style={{ top: `${isSnackbarOpen ? "6rem" : "-60px"}` }}>
      {snackbarMessage}
    </SnackbarContainer>
  );
};

export default Snackbar;
