import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { object } from 'prop-types';
import { scroller } from 'react-scroll';


const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: '500px',
    maxHeight: '700px',
    margin: '25px',
  },
  media: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(360deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  title: {
    fontSize: '3rem',
    paddingTop: '10px',
    marginBottom: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  tech: {
    width: '50px',
  },
  techBox: {
    height: '75px',
    width: '75px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  endType: {
    fontSize: '1rem',
    padding: '1px',
  },
  techOverlay : {
    width: '100%',
    height: '100%',
    zIndex: '1000',
  }
}));

const ProjectCard = ({ data, index, onArrowClick }) => {
  const [techColor, setTechColor] = useState('grey')
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const [techName, setTechName] = useState('');
  const [techIcon, setTechIcon] = useState('');


  const tech = [];
  const techKeys = Object.keys(data.techStack);
  for (let i = 0; i < techKeys.length; i += 1) {
    tech.push(
      <div className={classes.techOverlay}
        onMouseOver={()=>{setTechName(data.techStack[techKeys[i]].name); setTechName(techKeys[i])}} 
        onMouseOut={()=>{setTechName(''); setTechName('')}}>
        <div className={classes.techBox} 
          style={{backgroundColor: `${data.techStack[techKeys[i]].color}`}}>
            <img className={classes.tech} src={data.techStack[techKeys[i]].src} alt="Project Image" />
        </div>
      </div>,

    );
  }
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Card className={classes.root} elevation="24">
      <h1 className={classes.title}>
        {data.title}
        <h2 className={classes.endType}>
          {data.end} Application
        </h2>
        <CardContent>
        <Typography variant="body1" color="textSecondary" component="h1" style={{height: '128px', display: 'flex', alignItems: 'center', paddingLeft: '50px', paddingRight: '50px', marginBottom: '10px',}}>
          {data.description}
        </Typography>
      </CardContent>
        <div className={classes.media}>
          {tech}
        </div>
        <ul style={{height: '50px'}}>
        {techName !== '' ?
        <img src={data.techStack[techName].src} style={{width: '30px', marginRight: '30px'}} alt="Check out the Tech!" /> :
        ''
}
          {techName}
        </ul>
      </h1>
      <CardActions disableSpacing>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={(e) => {
            onArrowClick(e, index);
          }}
          aria-expanded={expanded}
          aria-label="show more"
        >
         Click to expand <ExpandMoreIcon />
        </IconButton>
      </CardActions>

    </Card>
  );
};

export default ProjectCard;
