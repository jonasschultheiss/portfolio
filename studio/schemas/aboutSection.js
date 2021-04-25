export default {
  name: 'aboutSection',
  title: 'About section',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      fields: [{ name: 'alt', title: 'Alt', type: 'string' }],
      options: {
        hotspot: true
      }
    },
    {
      title: 'Body',
      name: 'body',
      type: 'richText'
    },
    {
      title: 'Should the image float right?',
      name: 'imageRight',
      type: 'boolean'
    }
  ]
};
