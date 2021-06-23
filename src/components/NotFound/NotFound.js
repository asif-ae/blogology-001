import { Box } from '@material-ui/core';
import { Fragment } from 'react';

const NotFound = () => {
  return (
    <Fragment>
      <Box display="flex" justifyContent="center" textAlign="center" flexDirection="column">
        <Box fontSize="h1.fontSize" m={1}>404</Box>
        <Box Box fontSize="h3.fontSize" m={1}>Page Not Found</Box>
      </Box>
    </Fragment>
  );
};

export default NotFound;