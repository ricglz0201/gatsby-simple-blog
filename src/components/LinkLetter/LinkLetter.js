// @flow
import * as React from 'react';
import { Link } from 'gatsby';
import './LinkLetter.css';

type Props = {
  href: string,
  children: React.Node,
};

const LinkLetter = ({ href, children }: Props): React.Node => (
  <Link className="lang-icon" to={href}>
    {children}
  </Link>
);

export default LinkLetter;
