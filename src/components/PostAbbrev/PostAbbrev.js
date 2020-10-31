// @flow
import * as React from 'react';
import { Link } from 'gatsby';
import { rhythm } from 'utils/typography';
import { formatReadingTime } from 'utils/helpers';
import { formatDate } from 'utils/i18n';
import TagList from '../TagList';

type Props = {
  slug: string,
  title?: string,
  date: string,
  timeToRead: number,
  excerpt?: string,
  tags?: Array<any>,
  base?: string,
};

function PostAbbrev({
  base = '',
  date,
  excerpt,
  slug,
  tags,
  timeToRead,
  title,
}: Props): React.Node {
  let excerptPart;
  if (excerpt) {
    excerptPart = (
      <p
        dangerouslySetInnerHTML={{
          __html: excerpt,
        }}
      />
    );
  }

  let tagsPart;
  if (tags) {
    tagsPart = (
      <TagList style={{ margin: '0.5rem 0 -0.5rem -0.5rem' }} tags={tags} baseUrl={`${base}tags`} />
    );
  }

  return (
    <article>
      <header>
        <h3
          style={{
            fontFamily: 'Montserrat, sans-serif',
            fontSize: rhythm(1),
            marginBottom: rhythm(1 / 4),
          }}
        >
          <Link style={{ boxShadow: 'none' }} to={slug} rel="bookmark">
            {title}
          </Link>
        </h3>
        {tagsPart}
        <small>{`${formatDate(date)} • ${formatReadingTime(timeToRead)}`}</small>
        {excerptPart}
      </header>
    </article>
  );
}

PostAbbrev.defaultProps = {
  title: null,
  excerpt: null,
  tags: null,
  base: '',
};

export default PostAbbrev;
