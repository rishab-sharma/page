import React from 'react';

import PropTypes from 'prop-types';
import Link from 'gatsby-link';

import Tags from '@components/Blog/Tags';
import SplitLayout from '@common/SplitLayout';
import useRandomBlogPost from '@src/hooks/useRandomBlogPost';

const BlogLayout = ({ children, sharerSection }) => {
  const { randomSlug, randomTitle } = useRandomBlogPost();

  return (
    <SplitLayout
      content={children}
      aside={
        <>
          <section>
            <h4>Note - These Blogs are available at my medium handle <a href="https://medium.com/@kraken2309">kraken2309</a></h4>
            <h4>Random post</h4>
            <Link style={{ fontSize: '16px' }} to={randomSlug}>
              {randomTitle}
            </Link>
            <br />
            <br />
          </section>
          <section>
            <h4>Tags</h4>
            <Tags />
            <br />
          </section>
          {sharerSection && sharerSection}
        </>
      }
    />
  );
};

BlogLayout.propTypes = {
  children: PropTypes.node.isRequired,
  sharerSection: PropTypes.node,
};

export default BlogLayout;
