import sanityClient from '@sanity/client';

export const client = sanityClient({
  projectId: '2s5qb1a7',
  dataset: 'production',
  apiVersion: '2022-03-10',
  useCdn: false,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});
