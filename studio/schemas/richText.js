export default {
  title: 'Rich Text',
  name: 'richText',
  type: 'array',
  of: [
    {
      type: 'block',
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'H1', value: 'h1' },
        { title: 'H2', value: 'h2' },
        { title: 'H3', value: 'h3' },
        { title: 'H4', value: 'h4' },
        { title: 'H5', value: 'h5' },
        { title: 'H6', value: 'h6' },
        { title: 'Quote', value: 'blockquote' }
      ],
      lists: [
        { title: 'Bullet', value: 'bullet' },
        { title: 'Numbered', value: 'number' }
      ],
      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' }
        ],
        annotations: [
          {
            name: 'link',
            type: 'object',
            title: 'URL',
            fields: [
              { title: 'URL', name: 'href', type: 'url' },
              { title: 'Open in new window', name: 'blank', type: 'boolean' }
            ]
          }
        ]
      }
    },
    {
      type: 'code',
      name: 'code',
      title: 'Code example'
    },
    {
      type: 'image',
      name: 'image',
      title: 'Image',
      fields: [
        { name: 'alt', title: 'Alt', type: 'string' },
        { name: 'description', title: 'Figure description', type: 'string' }
      ],
      options: {
        hotspot: true
      }
    }
  ]
};
