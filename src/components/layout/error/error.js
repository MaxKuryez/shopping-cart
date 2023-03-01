import React from 'react';
import { Snackbar, Alert, AlertTitle } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { clearError, selectErrorsSlice } from '../../../store/slices';

const Error = () => {
  const dispatch = useDispatch();
  const { errorCode, errorMessage } = useSelector(selectErrorsSlice);

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