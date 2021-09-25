/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';

import { Pagination, PaginationItem } from '@material-ui/lab';
import { Link } from 'react-router-dom';

const Paginate = () => {
    const classes = useStyles();
    return  (
        <Pagination
          classes={{ ul: classes.ul }}
          count={numberOfPages}
          page={1}
          variant="outlined"
          color="primary"
          renderItem={(item) => (
            <PaginationItem {...item} component={Link} to={`/posts?page=${item.page}`} />
          )}
        />
      );
};
export default Paginate;