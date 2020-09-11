import React from 'react';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import Header from './navBarComponents/Header';
import Button from './navBarComponents/Button';

import styles from '../styles/navBarStyles';

const useStyles = makeStyles(styles);

export default function Navbar() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <Header
          brand="Transparent"
          color="transparent"
          rightLinks={(
            <List className={classes.list}>
              <ListItem className={classes.listItem}>
                <Button
                  color="transparent"
                  className={
                      `${classes.navLink} ${classes.socialIconsButton}`
                    }
                >
                  <i
                    className={
                        `${classes.socialIcons
                        } ${
                          classes.marginRight5
                        } fab fa-twitter`
                      }
                  />
                  {' '}
                  Twitter
                </Button>
              </ListItem>
              <ListItem className={classes.listItem}>
                <Button
                  color="transparent"
                  className={
                      `${classes.navLink} ${classes.socialIconsButton}`
                    }
                >
                  <i
                    className={
                        `${classes.socialIcons
                        } ${
                          classes.marginRight5
                        } fab fa-facebook`
                      }
                  />
                  {' '}
                  Facebook
                </Button>
              </ListItem>
              <ListItem className={classes.listItem}>
                <Button
                  color="transparent"
                  className={
                      `${classes.navLink} ${classes.socialIconsButton}`
                    }
                >
                  <i
                    className={
                        `${classes.socialIcons
                        } ${
                          classes.marginRight5
                        } fab fa-instagram`
                      }
                  />
                  {' '}
                  Instagram
                </Button>
              </ListItem>
            </List>
            )}
        />
      </div>
    </div>
  );
}
