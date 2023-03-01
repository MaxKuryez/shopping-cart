import { Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectLoadingSlice } from '../../../store/slices';
import { LoadingContainer } from './styled';

const Loading = () => {
  const { isLoading } = useSelector(selectLoadingSlice);
  if (isLoading)
    return (
      <LoadingContainer>
        <Typography variant="body1">Loading...</Typography>
      </LoadingContainer>
    );

  return <></>;
};

export default Loading;
