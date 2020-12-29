import React from 'react';

// Utilities
import { kebabCase } from 'utils/helpers';

// Components
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';

import Layout from 'components/Layout';
import Tag from 'components/Tag';
import Bio from 'components/Bio';
import { useLang } from 'context/LanguageContext';
import { formatMessage } from 'utils/i18n';

const styles = {
  tagListDiv: {
    marginLeft: '1.5rem',
    lineHeight: 3,
  },
};

type MarkdownRemark = {
  group: Array<{
    fieldValue: string,
    totalCount: number,
  }>
}

type Site = {
  siteMetadata: {
    title: string,
    lang: string,
  }
}

type Data = {
  allMarkdownRemark: MarkdownRemark,
  site: Site,
}

type Props = {
  data: Data,
  location: Object
}

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
  location,
}: Props) => {
  const { homeLink } = useLang();
  const tTags = formatMessage('tTags');

  return (
    <Layout location={location} title={title} breadcrumbs={[{ text: tTags }]}>
      <aside>
        <Bio />
      </aside>
      <Helmet title={tTags} />
      <div>
        <h1>{tTags}</h1>
        <div style={styles.tagListDiv}>
          {group.map(tag => (
            <Tag
              key={tag.fieldValue}
              text={tag.fieldValue}
              count={tag.totalCount}
              url={`${homeLink}tags/${kebabCase(tag.fieldValue)}/`}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default TagsPage;

export const pageQuery = graphql`
  query TagsTotalPage($langKey: String) {
    site {
      siteMetadata {
        title
        lang
      }
    }
    allMarkdownRemark(limit: 1000, filter: { fields: { langKey: { eq: $langKey } } }) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
