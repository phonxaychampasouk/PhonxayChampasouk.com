import { container, title, grayColor } from './nextjs-material-kit';
import headerLinksStyle from './headerLinksStyle';

const navbarsStyle = (theme) => ({
  section: {
    width: '100%',
    paddingTop: '0',
  },
  container:{
    width: '100%',
    position: 'absolute',

  },
  title: {
    ...title,
    marginTop: '30px',
    minHeight: '32px',
    textDecoration: 'none',
  },
  navbar: {
    marginBottom: '-20px',
    zIndex: '100',
    position: 'relative',
    overflow: 'hidden',
    '& header': {
      borderRadius: '0',
    },
  },
  navigation: {
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    marginTop: '0',
    minHeight: '740px',
  },
  formControl: {
    [theme.breakpoints.down('md')]: {
      margin: '10px 0 0 15px !important',
      color: grayColor,
    },
    margin: '10px 0 0 0 !important',
    paddingTop: '0',
  },
  inputRootCustomClasses: {
    margin: '0!important',
  },
  searchIcon: {
    width: '20px',
    height: '20px',
    color: 'inherit',
  },
  ...headerLinksStyle(theme),
  img: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
  },
  imageDropdownButton: {
    [theme.breakpoints.down('md')]: {
      top: '0',
      margin: '5px 15px',
    },
    padding: '0px',
    top: '4px',
    borderRadius: '50%',
    marginLeft: '5px',
  },
});

export default navbarsStyle;
