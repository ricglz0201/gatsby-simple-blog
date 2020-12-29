// @flow
import React from 'react';
import { graphql } from 'gatsby';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import { formatMessage } from '../utils/i18n';

type Prop = {
  data: Object,
  location: Object,
}

function NotFoundPage({ data, location }: Prop) {
  const {title} = data.site.siteMetadata;

  return (
    <Layout location={location} title={title}>
      <SEO title={formatMessage('t404Title')} />
      <h1>{formatMessage('t404Title')}</h1>
      <p>{formatMessage('t404Content')}</p>
    </Layout>
  );
}

export default NotFoundPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
