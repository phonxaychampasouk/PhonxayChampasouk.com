import { Paper } from '@material-ui/core';
import ProjectCard from './ProjectCard';
import Values from '../Values';

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
const projectCard = [];
projectsData.forEach((data) => projectCard.push(
  <ProjectCard data={data} />,
));

const Projects = () => (
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
  </section>
);

export default Projects;
