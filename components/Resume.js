import React from 'react';

const Resume = () => {
  const object = {
    resume: {
      skillmessage: 'Here you can create a short write-up of your skills to show off to employers',
      education: [
        {
          school: 'University?',
          degree: 'Masters in Beer tasting',
          graduated: 'April 2007',
          description: 'Describe your experience at school, what you learned, what useful skills you have acquired etc.',
        },
        {
          school: 'School #1 Maybe College?',
          degree: 'What did you study 101',
          graduated: 'March 2003',
          description: 'Describe your experience at school, what you learned, what useful skills you have acquired etc.',
        },
      ],
      work: [
        {
          company: 'Awesome Design Studio',
          title: 'Senior UX God ',
          years: 'March 2010 - Present',
          description: 'Describe work, special projects, notable achievements, what technologies you have been working with, and anything else that would be useful for an employer to know.',
        },
        {
          company: 'Super Cool Studio',
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
          <h1><span>Education</span></h1>
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
          <h1><span>Work</span></h1>
        </div>

        <div className="nine columns main-col">
          {work}
        </div>
      </div>

      <div className="row skill">

        <div className="three columns header-col">
          <h1><span>Skills</span></h1>
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
