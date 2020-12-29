// @flow
import './Tag.css';

import React from 'react';
import { Link } from 'gatsby';

type Props = {
  count?: number,
  text: string,
  url: string,
}

function Tag({
  count = null,
  text,
  url,
}: Props) {
  let countPart;
  if (count != null) {
    countPart = `  (${count})`;
  }
  return (
    <div className="round">
      <Link className="link" to={url}>
        <span className="text">
          {text}
          {countPart}
        </span>
      </Link>
    </div>
  );
}

Tag.defaultProps = {
  count: null,
};

export default Tag;
