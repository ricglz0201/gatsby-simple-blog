// @flow
import * as React from 'react';

import { graphql, useStaticQuery } from 'gatsby';
import { DiscussionEmbed } from 'disqus-react';

type Props = {
  identifier: any,
  show: bool,
  title: string,
}

function Disqus({ identifier, title, show = false }: Props): React.Node {
  const {
    site: {
      siteMetadata: { disqusShortName },
    },
  } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            disqusShortName
          }
        }
      }
    `,
  );

  if (!disqusShortName || !show) {
    return null;
  }

  return <DiscussionEmbed shortname={disqusShortName} config={{ identifier, title }} />;
}

export default Disqus;
