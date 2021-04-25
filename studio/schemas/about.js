export default {
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'subTitle',
      title: 'Sub Title',
      type: 'string'
    },
    {
      title: 'Sections',
      name: 'sections',
      type: 'array',
      of: [
        {
          name: 'sections',
          type: 'reference',
          to: [{ type: 'aboutSection' }]
        }
      ]
    }
  ]
};
