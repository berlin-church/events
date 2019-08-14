/**
 *
 * LayoutWrapper
 *
 */

import React, { memo } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: '#000',
    height: '64',
  },
  title: {
    justifyContent: 'center',
    color: '#fff',
  },
  logo: {
    width: '150px',
  },
});

function LayoutWrapper() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="static">
        <Toolbar className={classes.title}>
          <img
            className={classes.logo}
            src="//static1.squarespace.com/static/589397498419c2f6476f2c77/t/5b28efa970a6ad0778246fc3/1539028385210/?format=1500w"
            alt="Berlin International Community Church"
          />
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default memo(LayoutWrapper);
