// @flow
import * as React from 'react';

import { Link } from 'gatsby';

import { scale } from 'utils/typography';

type Props = {
  location: string | Object,
  title?: string,
  base?: string,
};

function Header({ location, title, base = '' }: Props): React.Node {
  // eslint-disable-next-line no-undef
  const rootPath = `${__PATH_PREFIX__}${base}`;

  if (location.pathname === rootPath) {
    return (
      <h1
        style={{
          ...scale(0.75),
          marginBottom: 0,
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: 'none',
            textDecoration: 'none',
            color: 'var(--textTitle)',
          }}
          to={base}
        >
          {title}
        </Link>
      </h1>
    );
  }
  return (
    <h3
      style={{
        fontFamily: 'Montserrat, sans-serif',
        marginTop: 0,
        marginBottom: 0,
        height: 42,
        lineHeight: '2.625rem',
      }}
    >
      <Link
        style={{
          boxShadow: 'none',
          textDecoration: 'none',
          color: 'rgb(255, 167, 196)',
        }}
        to={base}
      >
        {title}
      </Link>
    </h3>
  );
}

Header.defaultProps = {
  title: null,
  base: '',
};

export default Header;
