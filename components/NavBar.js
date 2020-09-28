import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Header from './navBarComponents/Header';
import Button from './navBarComponents/Button';

import styles from '../styles/navBarStyles';

const useStyles = makeStyles(styles);

export default function Navbars() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div id="navbar" className={classes.navbar}>
          <Header
            rightLinks={(
              <List className={classes.list}>
                <ListItem className={classes.listItem}>
                Phonxay Champasouk || Seattle WA || Explorer
                </ListItem>
              </List>
            )}
          />
        </div>
      </div>
    </div>
  );
}
