import { type SchemaTypeDefinition } from 'sanity';
import { blog } from './blog';
import { blogPost } from './blogpost';
import { offer } from './offer';
import product from './product';
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, blog, blogPost, offer, ]
}
