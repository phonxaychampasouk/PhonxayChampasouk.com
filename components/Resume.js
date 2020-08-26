import React from 'react';
import Skills from './featureComponents/Skills';

const Resume = () => {
  const object = {
    resume: {
      skillmessage: 'Here you can create a short write-up of your skills to show off to employers',
      education: [
        {
          school: 'Hack Reactor',
          degree: 'Seattle Campus',
          graduated: 'May 2020',
          description: 'Hack Reactor is an immersive full-stack development program that teaches students to master advanced HTML and CSS, front-end JavaScript frameworks with React, server development with Node, and databases with SQL and Mongo during 800 hours of instruction, projects, and hands-on work.',
        },
        {
          school: 'Microsoft Software and Systems Academy',
          degree: 'Fort Bragg',
          graduated: 'Nov 2019',
          description: 'The MSSA teaches transitioning service members the fundamentals of C# programming while building local, server based and cloud-stored applications. Concepts include database programming, data integration and manipulation, C# application programming with ASP.net MVC and application development in Azure.',
        }, {
          school: 'Seattle Central College',
          degree: 'AA in Computer Science',
          graduated: 'Expected: Jul 2021',
          description: 'Current Student',
        },
      ],
      work: [
        {
          company: 'US Army',
          title: 'Infantry Sargeant',
          years: 'Sept 2014 - Sept 2019',
          description: 'I worked closely with allied forces across our North Atlantic Treaty Organization partners. While I was stationed in Grafenwohr, Germany (Bavaria), I had the opportunity to build relations with amazing people from all backgrounds. Promoted to Sargeant for technical expertise. Created training regimens for use for 1000 + people in Land Navigation.',
        },
        {
          company: 'Best Buy Mobile',
          title: 'Sales Solution Specialist',
          years: 'Jul 2012 - Nov 2013',
          description: 'Provided superior customer service which resulted in high level of sales and customer retention. Taught customers how to utilize products and demonstrated new features upon software updates. Recommended, selected and helped locate merchandise based on customer needs and desires',
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
      <div id="resume-background-image">
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

          <div className="skills-container">
            <Skills />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
