/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';

import { rhythm } from 'utils/typography';
import './Bio.css';

import SocialBar from '../SocialBar';

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 70, height: 70) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        description
      }
    }
  }
`;

function Bio() {
  const { avatar, site } = useStaticQuery(bioQuery);
  const { author, description } = site.siteMetadata;
  return (
    <div style={{marginBottom: rhythm(2.5)}}>
      <div className="bio">
        <Image
          alt={author}
          className="pic"
          fixed={avatar.childImageSharp.fixed}
          imgStyle={{borderRadius: '50%'}}
          style={{marginRight: rhythm(1 / 2)}}
        />
        <div className="description">
          <p>{description}</p>
          <SocialBar />
        </div>
      </div>
    </div>
  );
}

export default Bio;
