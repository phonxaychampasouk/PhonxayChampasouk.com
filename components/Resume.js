import React from 'react';

const Resume = () => {
  const object = {
    resume: {
      skillmessage: 'Here you can create a short write-up of your skills to show off to employers',
      education: [
        {
          school: 'Galvinize: Hack Reactor',
          degree: 'Seattle Campus',
          graduated: 'May 2020',
          description: 'Hack Reactor is an immersive full-stack development program that teaches students to master advanced HTML and CSS, front-end JavaScript frameworks with React, server development with Node, and databases with SQL and Mongo during 800 hours of instruction, projects, and hands-on work.',
        },
        {
          school: 'Microsoft Software and Systems Academy',
          degree: 'What did you study 101',
          graduated: 'Nov 2019',
          description: 'The MSSA teaches transitioning service members the fundamentals of C# programming while building local, server based and cloud-stored applications. Concepts include database programming, data integration and manipulation, C# application programming with ASP.net MVC and application development in Azure.',
        },
      ],
      work: [
        {
          company: 'US Army',
          title: 'Senior UX God ',
          years: 'Sept 2014 - Sept 2019',
          description: 'I worked close',
        },
        {
          company: 'Best Buy Mobile',
          title: 'Junior bug fixer',
          years: 'March 2007 - February 2010',
          description: 'Describe work, special projects, notable achievements, what technologies you have been working with, and anything else that would be useful for an employer to know.',
        },
      ],
    },
  };

  const { skillmessage } = object.resume;
  const education = object.resume.education.map((education) => (
    <div key={education.school}>
      <h3>{education.school}</h3>
      <p className="info">
        {education.degree}
        {' '}
        <span>&bull;</span>
        <em className="date">{education.graduated}</em>
      </p>
      <p>{education.description}</p>
    </div>
  ));
  const work = object.resume.work.map((work) => (
    <div key={work.company}>
      <h3>{work.company}</h3>
      <p className="info">
        {work.title}
        <span>&bull;</span>
        {' '}
        <em className="date">{work.years}</em>
      </p>
      <p>{work.description}</p>
    </div>
  ));

  return (
    <section id="resume">

      <div className="row education">
        <div className="three columns header-col">
          <h1 id="banner-title"><span>Education</span></h1>
        </div>

        <div className="nine columns main-col">
          <div className="row item">
            <div className="twelve columns">
              {education}
            </div>
          </div>
        </div>
      </div>

      <div className="row work">

        <div className="three columns header-col">
          <h1 id="banner-title"><span>Work</span></h1>
        </div>

        <div className="nine columns main-col">
          {work}
        </div>
      </div>

      <div className="row skill">

        <div className="three columns header-col">
          <h1 id="banner-title"><span>Skills</span></h1>
        </div>

        <div className="nine columns main-col">

          <p>
            {skillmessage}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Resume;
