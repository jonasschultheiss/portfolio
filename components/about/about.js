import AboutSection from '@components/about/aboutSection';
import PageTitle from '@components/pageTitle';

export default function About({ about }) {
  const { title, subTitle, sections } = about;
  return (
    <>
      <PageTitle title={title} subTitle={subTitle} />
      <div className="flex flex-col space-y-8">
        {sections &&
          sections.map(section => (
            <AboutSection key={section._id} image={section.image} body={section.body} imageRight={section.imageRight} />
          ))}
      </div>
    </>
  );
}
