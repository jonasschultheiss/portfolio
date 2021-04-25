export default {
  name: 'social',
  title: 'Social',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'href',
      title: 'URL',
      type: 'url',
      validation: Rule =>
        Rule.uri({
          scheme: ['https']
        })
    },
    {
      name: 'icon',
      title: 'Icon',
      type: 'image',
      fields: [{ name: 'alt', title: 'Alt', type: 'string' }],
      options: {
        hotspot: true
      }
    }
  ]
};
