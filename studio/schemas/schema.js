import schemaTypes from 'all:part:@sanity/base/schema-type';
import createSchema from 'part:@sanity/base/schema-creator';
import header from './header';
import socials from './social';

export default createSchema({
  name: 'default',
  types: [...schemaTypes, header, socials]
});
