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

  const scrollTo = (e) => {
    e.preventDefault();
    console.log('e.target:', e.curretTarget);
    const element = document.getElementById(e.currentTarget.value);
    console.log('element:', element);
    element.scrollIntoView();
 
  };

  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div id="navbar" className={classes.navbar}>
          <Header
            brand="Phonxay Champasouk"
            rightLinks={(
              <List className={classes.list}>
                <ListItem className={classes.listItem}>
                  <Button
                    value="about"
                    className={classes.navLink}
                    onClick={(e) => scrollTo(e)}
                    color="transparent"
                  >
                    About me
                  </Button>
                </ListItem>
                <ListItem className={classes.listItem}>
                  <Button
                    value="resume"
                    className={classes.navLink}
                    onClick={(e) => scrollTo(e)}
                    color="transparent"
                  >
                    Resume
                  </Button>
                </ListItem>
                <ListItem className={classes.listItem}>
                  <Button
                    value="projects-container"
                    className={classes.navLink}
                    onClick={(e) => scrollTo(e)}
                    color="rose"
                    round
                  >
                    Projects
                  </Button>
                </ListItem>
              </List>
            )}
          />
        </div>
      </div>
    </div>
  );
}
