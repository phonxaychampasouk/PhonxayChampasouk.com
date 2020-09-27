import { Component, setState } from 'react';
import { Paper } from '@material-ui/core';
import ProjectCard from './ProjectCard';
import SelectedProject from './SelectedProject';

/*
![Searching](https://media.giphy.com/media/jPM6MCEVEDPwT5KVYr/giphy.gif)
![Searching](https://media.giphy.com/media/TiD5KnzynJFiqAj9EZ/giphy.gif)
![Screencast](https://i.imgur.com/Qp9I81j.gif)

*/

const projectsData = [
  {
    title: 'Find and Dine',
    description: 'A full stack open-source web app featuring reviews, photo galleries, and menus',
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
  },
  {
    title: 'Webchat Editor',
    description: '',
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

  onArrowClick(event) {
    this.setState({
      displayProject: true,
      cardPage: event,
    });
  }
  // TODO: Create function that that paginates slider with gallery arrow

  onLeftClick(event) {
    this.setState({
      cardPage: event,
    });
  }

  onRightClick(event) {
    this.setState({
      cardPage: event,
    });
  }

  render() {
    const { displayProject, cardPage } = this.state;
    const projectCard = [];
    projectsData.forEach((data, index) => projectCard.push(
      <ProjectCard index={index} cardPage={cardPage} onArrowClick={this.onArrowClick} data={data} />,
    ));
    return (

      <section className="projects-container">
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
        <div className="selected-project">
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
