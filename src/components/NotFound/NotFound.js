import { Box } from '@material-ui/core';
import { Fragment } from 'react';

const NotFound = () => {
  return (
    <Fragment>
      <Box display="flex" justifyContent="center" alignItems="center" className="height-100">
        <Box textAlign="center" color="error.dark">
          <Box fontSize="h3.fontSize" m={1}>404</Box>
          <Box Box fontSize="h4.fontSize" m={1}>Page Not Found!</Box>
        </Box>
      </Box>
    </Fragment>
  );
};

export default NotFound;