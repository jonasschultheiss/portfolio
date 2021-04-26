import React from 'react';
import ProjectPreview from './projectPreview';

export default function Projects({ title, subTitle, projects }) {
  console.log('🚀 ~ file: projects.js ~ line 2 ~ Projects ~ projects', projects);
  return (
    <div>
      <h3 className="text-2xl font-bold text-center text-gray-900">{title}</h3>
      <h4 className="text-xl text-center text-gray-700 mb-4 md:mb-10">{subTitle}</h4>
      <div className="p-2 md:grid md:grid-cols-3 md:gap-4 md:space-y-0 space-y-4 md:place-items-center">
        {projects &&
          projects.map(project => (
            <ProjectPreview
              key={project._id}
              image={project.image}
              title={project.title}
              subTitle={project.subTitle}
              slug={project.slug}
              projectStartDate={project.projectStartDate}
            />
          ))}
      </div>
    </div>
  );
}
