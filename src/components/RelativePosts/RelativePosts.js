// @flow
import React from 'react';

import { formatMessage } from 'utils/i18n';
import RelativePost from '../RelativePost';

type Props = {
  lang?: string,
  postNodes?: Array<any>,
}

function RelativePosts({ postNodes, lang }: Props) {
  const postNodesNotNull = postNodes.filter(x => x);

  if (postNodesNotNull.length === 0) {
    return null;
  }

  return (
    <>
      <hr />
      <div style={{ marginTop: '-1rem' }}>{formatMessage('tRelativePosts')}:</div>
      {postNodesNotNull.map(postNode => (
        <RelativePost lang={lang} key={postNode.fields.slug} postNode={postNode} />
      ))}
    </>
  );
}

RelativePosts.defaultProps = {
  postNodes: [],
  lang: '',
};

export default RelativePosts;
