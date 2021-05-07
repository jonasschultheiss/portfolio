import PageTitle from '@components/pageTitle';
import ProjectPreview from '@components/projects/projectPreview';
import React from 'react';

export default function Projects({ title, subTitle, projects }) {
  return (
    <>
      <PageTitle title={title} subTitle={subTitle} />
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
    </>
  );
}
