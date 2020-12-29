import './TagList.css';

import React from 'react';

import Tag from '../Tag';

type Props = {tags: Array<any>, baseUrl ?: string}

function TagList({ tags, baseUrl }: Props) {
  return (
    <ul className="tag-ul">
      {tags.map(text => (
        <li key={text}>
          <Tag text={text} url={`${baseUrl}/${text}`} />
        </li>
      ))}
    </ul>
  );
}

TagList.defaultProps = {
  baseUrl: '',
};

export default TagList;
