import { Snackbar, Alert, AlertTitle } from "@mui/material";
import { useTypedDispatch, useTypedSelector } from "store/hooks";
import { clearError, selectErrorsSlice } from "store/slices";

const Error = () => {
  const dispatch = useTypedDispatch();
  const { errorCode, errorMessage } = useTypedSelector(selectErrorsSlice);

  const handleClose = () => {
    dispatch(clearError());
  };

  return (
    <>
      {errorMessage &&
        <Snackbar open={true} autoHideDuration={4000} onClose={handleClose}>
          <Alert severity="error" onClose={handleClose}>
            <AlertTitle>Error {errorCode}</AlertTitle>
            {errorMessage}
          </Alert>
        </Snackbar>
      }
    </>
  );
};

export default Error;
