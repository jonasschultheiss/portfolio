export default {
  title: 'Link',
  name: 'link',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'name',
      title: 'Name',
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
    }
  ]
};
