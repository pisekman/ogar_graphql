import React from 'react';
import { gql, useQuery } from '@apollo/client';

const GET_POST_TITLES = gql`
  query getPostTitle {
    posts {
      nodes {
        title
      }
    }
  }
`;

const PostLatest = () => {
  const { loading, error, data } = useQuery(GET_POST_TITLES);

  const isPosts = Boolean(data?.posts.nodes.length);

  return (
    <div>
      {isPosts && data.posts.nodes.map((post) => <p>{post.title}</p>)}
    </div>
  );
};

export default PostLatest;
