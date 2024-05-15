import React, { useContext } from "react";
import { SnackbarContainer } from "./styles/snackbar.styles";
import DataStorageContext from "../../contexts/DataStorageContext";

const Snackbar = () => {
  const { snackbarMessage } = useContext(DataStorageContext);
  return <SnackbarContainer>{snackbarMessage}</SnackbarContainer>;
};

export default Snackbar;
