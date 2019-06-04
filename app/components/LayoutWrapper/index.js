/**
 *
 * LayoutWrapper
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: '#000',
  },
  title: {
    justifyContent: 'center',
    color: '#fff',
  },
});

function LayoutWrapper() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="static">
        <Toolbar className={classes.title}>
          <FormattedMessage
            {...messages.header}
            values={{
              name: <b>church</b>,
            }}
          />
        </Toolbar>
      </AppBar>
    </div>
  );
}

LayoutWrapper.propTypes = {};

export default memo(LayoutWrapper);
