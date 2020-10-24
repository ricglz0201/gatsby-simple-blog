// @flow
import './Breadcrumbs.css';

import * as React from 'react';
import { Link } from 'gatsby';
import { formatMessage } from 'utils/i18n';

type Data = {
  text: string,
  url: ?string,
}

type Props = {
  data: ?Array<Data>,
  showTop: ?bool,
  base: ?string,
}

function Breadcrumb({ text, url }: Data): React.Node {
  if (url != null) {
    return (
      <li className="breadcrumbs-item">
        <Link to={url} className="breadcrumbs-element">
          {text}
        </Link>
      </li>
    );
  }
  return (
    <li className="breadcrumbs-item_active">
      <span className="breadcrumbs-element">{text}</span>
    </li>
  );

}

function Breadcrumbs({
  data = null,
  showTop = false,
  base = '',
}: Props): React.Node {
  if (data == null) {
    return null;
  }

  const topBCli = showTop ? (
    <li className="breadcrumbs-item">
      <Link to={base} className="breadcrumbs-element">
        {formatMessage('tHome')}
      </Link>
    </li>
  ) : null;

  return (
    <ul className="breadcrumbs breadcrumbs-ul">
      {topBCli}
      {data.map(({ text, url }) => (
        <Breadcrumb key={text} text={text} url={url} />
      ))}
    </ul>
  );
}

export default Breadcrumbs;
