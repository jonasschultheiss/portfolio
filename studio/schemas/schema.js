import schemaTypes from 'all:part:@sanity/base/schema-type';
import createSchema from 'part:@sanity/base/schema-creator';
import about from './about';
import aboutSection from './aboutSection';
import blog from './blog';
import blogPost from './blogPost';
import header from './header';
import richText from './richText';
import socials from './social';
import technology from './technology';

export default createSchema({
  name: 'default',
  types: [...schemaTypes, header, socials, about, aboutSection, richText, technology, blog, blogPost]
});
