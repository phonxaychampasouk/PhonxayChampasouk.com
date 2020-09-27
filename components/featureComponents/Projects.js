import { Component, setState } from 'react';
import { Paper } from '@material-ui/core';

import ProjectCard from './ProjectCard';
import SelectedProject from './SelectedProject';

const projectsData = [
  {
    title: 'Find and Dine',
    description: 'A full stack open-source web app featuring reviews, photo galleries, and menus',
    src: 'https://github.com/find-and-dine/Find-and-Dine',
  },
  {
    title: 'Vapor Games',
    description: 'An open-source game reviews application displaying gameplay and customer reviews.',
    src: 'https://github.com/nightmareteam/Gameplay-Finder',
  },
  {
    title: 'Webchat Editor',
    description: '',
    src: '',
  },
  {
    title: 'Webchat Editor',
    description: '',
    src: '',
  },
];

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayProject: false,
      cardIndex: 0,
    };
    this.onArrowClick = this.onArrowClick.bind(this);
  }

  onArrowClick(event) {
    this.setState({
      displayProject: true,
      cardIndex: event,
    });
  }

  render() {
    const { displayProject, cardIndex } = this.state;
    const projectCard = [];
    projectsData.forEach((data, index) => projectCard.push(
      <ProjectCard index={index} onArrowClick={this.onArrowClick} data={data} />,
    ));
    return (

      <section className="projects-container">
        <button type="button" className="projects-button">
          Left
        </button>
        <button type="button" className="projects-button">
          Right
        </button>
        <div className="project-card">
          {projectCard}
        </div>
        <div className="selected-project">
          {displayProject ? (
            <SelectedProject
              data={projectsData}
              cardIndex={cardIndex}
            />
          ) : <> </>}
        </div>
      </section>
    );
  }
}
export default Projects;
