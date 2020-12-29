// @flow
import React from 'react';

import { Link } from 'gatsby';

import { rhythm } from 'utils/typography';
import { formatDate } from 'utils/i18n';

type Props = { postNode: Object };

function RelativePost({ postNode }: Props) {
  const {
    fields: { slug },
    frontmatter: { title, date },
  } = postNode;
  return (
    <Link style={{ boxShadow: 'none' }} to={slug} rel="bookmark">
      <article
        style={{
          marginBottom: rhythm(1 / 2),
        }}
      >
        <header>
          <h3
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: rhythm(1),
              margin: `${rhythm(1 / 2)} ${rhythm(1 / 4)} 0`,
            }}
          >
            {title}
          </h3>
          <small
            style={{
              marginLeft: rhythm(1 / 4),
            }}
          >
            {formatDate(date)}
          </small>
        </header>
      </article>
    </Link>
  );
}

export default RelativePost;
