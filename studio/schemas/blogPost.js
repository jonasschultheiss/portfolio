export default {
  name: 'blogPost',
  title: 'Blog Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'subTitle',
      title: 'Subtitle',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 200, // will be ignored if slugify is set
        slugify: input => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200)
      }
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
    }
  ]
};
