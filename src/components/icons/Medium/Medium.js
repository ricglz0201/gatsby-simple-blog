// @flow
import React from 'react';

import RotateLinkImg from '../../RotateLinkImg';
import { Props } from '../IconType';
import dark from './dark.png';
import light from './light.png';
import withThemeFlag from '../../../utils/withThemeFlag';

function Medium({ username, size, isLightTheme }: Props) {
  if (!username) return null;

  return (
    <RotateLinkImg
      href={`https://medium.com/@${username}`}
      src={isLightTheme ? dark : light}
      size={size}
    />
  );
}

Medium.defaultProps = {
  username: null,
  size: 24,
  isLightTheme: true,
};

export default withThemeFlag(Medium);
