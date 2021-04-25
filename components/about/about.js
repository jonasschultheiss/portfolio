import AboutSection from './aboutSection';

export default function About({ about }) {
  const { title, subTitle, sections } = about;
  return (
    <div className="md:m-12 m-4">
      <h3 className="text-2xl font-bold text-center text-gray-900">{title}</h3>
      <h4 className="text-xl  text-center text-gray-700">{subTitle}</h4>
      {sections &&
        sections.map(section => (
          <AboutSection key={section._id} image={section.image} body={section.body} imageRight={section.imageRight} />
        ))}
    </div>
  );
}
