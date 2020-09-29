import { Component, setState } from 'react';
import { Paper } from '@material-ui/core';
import SelectedProject from './SelectedProject';
import ProjectCard from './ProjectCard';
// import { useDimensions } from "./valuesComponents/useDimensions";

/*
![Searching](https://media.giphy.com/media/jPM6MCEVEDPwT5KVYr/giphy.gif)
![Searching](https://media.giphy.com/media/TiD5KnzynJFiqAj9EZ/giphy.gif)
![Screencast](https://i.imgur.com/Qp9I81j.gif)

*/

const projectsData = [
  {
    title: 'Find and Dine',
    description: 'A full stack open-source web app featuring reviews, photo galleries, and menus. For this Project I was tasked to create the entire photo gallery from scratch! This project was a front end focused web application that I had deployed using Docker containers.',
    end: 'Full Stack',
    src:
     'https://github.com/find-and-dine/Find-and-Dine',
    techStack:
    {
      Javacript: {
        src: 'https://simpleicons.org/icons/javascript.svg',
        color: '#F7DF1E',
      },
      React: {
        src: 'https://simpleicons.org/icons/react.svg',
        color: '#61DAFB',
      },
      AWS: {
        src: 'https://simpleicons.org/icons/amazonaws.svg',
        color: '#232F3E',
      },
      Docker: {
        src: 'https://simpleicons.org/icons/docker.svg',
        color: '#2496ED',
      },
      MongoDb: {
        src: 'https://simpleicons.org/icons/mongodb.svg',
        color: '#47A248',
      },
    },
    images: ['https://media.giphy.com/media/jPM6MCEVEDPwT5KVYr/giphy.gif'],
    additionalImages: [],

  },
  {
    title: 'Webchat Editor',
    description: 'The app provides a GUI to allow a user to customize the look and feel of a webchat instance, see the results of these customizations, and export the custom settings to their own web-chat instance. \n \n The basic framework and proof-of-concept was already been built out by a member of Microsofts web-chat team. \n \n Our group is working to add a more robust feature set to this app, as well as an improved design and user-experience. The most recent version (shown below) has an option to change every customization currently offered by the webchat API. Our designer is currently working on wireframes for the layout, as well as for each of the various selector types. (ie color, percentage, integer, css...) ',
    end: 'Front-End',
    src: '',
    techStack:
    {
      TypeScript: {
        src: 'https://simpleicons.org/icons/typescript.svg',
        color: '#007ACC',
      },
      React: {
        src: 'https://simpleicons.org/icons/react.svg',
        color: '#61DAFB',
      },
      Azure: {
        src: 'https://simpleicons.org/icons/microsoftazure.svg',
        color: '#0089D6',
      },
    },

    images: ['https://media.giphy.com/media/jPM6MCEVEDPwT5KVYr/giphy.gif'],
    additionalImages: [],
  }, {
    title: 'Vapor Games',
    description: 'Overhauled back-end service of original code to increase through-put success rates by 300%. Gameplay finder has the ability to display reviews, gameplay images and developer information while filtering through 10 million entries.',
    end: 'Back-End',
    src:
     'https://github.com/nightmareteam/Gameplay-Finder',
    techStack:
    {
      Javacript: {
        src: 'https://simpleicons.org/icons/javascript.svg',
        color: '#F7DF1E',
      },
      React: {
        src: 'https://simpleicons.org/icons/react.svg',
        color: '#61DAFB',
      },
      AWS: {
        src: 'https://simpleicons.org/icons/amazonaws.svg',
        color: '#232F3E',
      },
      Docker: {
        src: 'https://simpleicons.org/icons/docker.svg',
        color: '#2496ED',
      },
      PostgreSQL: {
        src: 'https://simpleicons.org/icons/postgresql.svg',
        color: '#336791',
      },
    },

    images: ['https://media.giphy.com/media/jPM6MCEVEDPwT5KVYr/giphy.gif'],
      additionalImages: [],
  }, {
    title: 'phonxay.com',
    description: 'A mobile web application I am building for myself. The primary focus for this website is to have the ability to display my portfolio. [Development]',
    end: 'Front-End',
    src: '',
    techStack:
    {
      Javacript: {
        src: 'https://simpleicons.org/icons/javascript.svg',
        color: '#F7DF1E',
      },
      React: {
        src: 'https://simpleicons.org/icons/react.svg',
        color: '#61DAFB',
      },
      Azure: {
        src: 'https://simpleicons.org/icons/microsoftazure.svg',
        color: '#0089D6',
      },
      Docker: {
        src: 'https://simpleicons.org/icons/docker.svg',
        color: '#2496ED',
      },
    },
    images: ['https://media.giphy.com/media/jPM6MCEVEDPwT5KVYr/giphy.gif'],
    additionalImages: [],

  },
  {
    title: 'phonxay.com',
    description: 'A mobile web application I am building for myself. The primary focus for this website is to have the ability to display my portfolio. [Development]',
    end: 'Front-End',
    src: '',
    techStack:
    {
      Javacript: {
        src: 'https://simpleicons.org/icons/javascript.svg',
        color: '#F7DF1E',
      },
      React: {
        src: 'https://simpleicons.org/icons/react.svg',
        color: '#61DAFB',
      },
      Azure: {
        src: 'https://simpleicons.org/icons/microsoftazure.svg',
        color: '#0089D6',
      },
      Docker: {
        src: 'https://simpleicons.org/icons/docker.svg',
        color: '#2496ED',
      },
    },
    images: ['https://media.giphy.com/media/jPM6MCEVEDPwT5KVYr/giphy.gif'],
    additionalImages: [],

  },
  {
    title: 'Photo Gallery',
    description: 'This is a photo gallery that I have engineered to display some of my favorite photo that I have taken. Check it out!',
    end: 'Front-End',
    src: '',
    techStack:
    {
      Javacript: {
        src: 'https://simpleicons.org/icons/javascript.svg',
        color: '#F7DF1E',
      },
      React: {
        src: 'https://simpleicons.org/icons/react.svg',
        color: '#61DAFB',
      },
      Azure: {
        src: 'https://simpleicons.org/icons/microsoftazure.svg',
        color: '#0089D6',
      },
    },
    images: ['https://media.giphy.com/media/jPM6MCEVEDPwT5KVYr/giphy.gif'],
    additionalImages: [],

  },
];

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayProject: false,
      cardPage: 0,
    };
    this.onArrowClick = this.onArrowClick.bind(this);
    this.onLeftClick = this.onLeftClick.bind(this);
    this.onRightClick = this.onRightClick.bind(this);
  }

  onArrowClick(e, index) {
    console.log(e.target);
    this.setState({
      displayProject: true,
      cardPage: index,
    });
    e.target.scrollIntoView();
  }
  // TODO: Create function that that paginates slider with gallery arrow

  onLeftClick(index) {
    this.setState({
      cardPage: index,
    });
  }

  onRightClick(index) {
    this.setState({
      cardPage: index,
    });
  }




  render() {
    const { displayProject, cardPage } = this.state;
    const projectCard = [];
    projectsData.forEach((data, index) => projectCard.push(
      <ProjectCard index={index} cardPage={cardPage} onArrowClick={this.onArrowClick} data={data} />,
    ));
    return (
      <section id="projects-container">
        <div className="project-cards-container">
          <div className="card-container">
            <h1 style={{ fontSize: '3rem', marginBottom: '10px' }}>
              Projects
            </h1>
            <div className="project-card">
              {projectCard}
            </div>
          </div>
        </div>
        <div id="selected-project">
          {displayProject ? (
            <SelectedProject
              data={projectsData}
              cardPage={cardPage}
              onLeftClick={this.onLeftClick}
              onRightClick={this.onRightClick}
            />
          ) : <> </>}
        </div>
      </section>
    );
  }
}
export default Projects;
