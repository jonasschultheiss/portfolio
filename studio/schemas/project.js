export default {
  name: 'project',
  title: 'Project',
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
      title: 'Project start date',
      name: 'projectStartDate',
      type: 'date',
      options: {
        dateFormat: 'DD-MM-YYYY',
        calendarTodayLabel: 'Today'
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
      title: 'Technologies',
      name: 'technologies',
      type: 'array',
      of: [
        {
          name: 'technologies',
          type: 'reference',
          to: [{ type: 'technology' }]
        }
      ]
    },
    {
      title: 'Repositories',
      name: 'repositories',
      type: 'array',
      of: [
        {
          name: 'repositories',
          type: 'reference',
          to: [{ type: 'link' }]
        }
      ]
    },
    {
      title: 'Deployed Links',
      name: 'deployedLinks',
      type: 'array',
      of: [
        {
          name: 'deployedLinks',
          type: 'reference',
          to: [{ type: 'link' }]
        }
      ]
    },
    {
      title: 'Links',
      name: 'links',
      type: 'array',
      of: [
        {
          name: 'links',
          type: 'reference',
          to: [{ type: 'link' }]
        }
      ]
    },
    {
      title: 'Body',
      name: 'body',
      type: 'richText'
    }
  ]
};
