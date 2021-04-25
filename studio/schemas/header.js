export default {
  name: 'header',
  title: 'Header',
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
      name: 'hero_image',
      title: 'Hero Image',
      type: 'image',
      fields: [{ name: 'alt', title: 'Alt', type: 'string' }],
      options: {
        hotspot: true
      }
    },
    {
      title: 'Socials',
      name: 'socials',
      type: 'array',
      of: [
        {
          name: 'socials',
          type: 'reference',
          to: [{ type: 'social' }]
        }
      ]
    }
  ]
};
