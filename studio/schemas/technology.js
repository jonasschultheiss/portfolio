export default {
  name: 'technology',
  title: 'Technology',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
      fields: [{ name: 'alt', title: 'Alt', type: 'string' }],
      options: {
        hotspot: true
      }
    }
  ]
};
