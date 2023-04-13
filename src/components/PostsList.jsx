import React from 'react';
import { gql, useQuery } from '@apollo/client';
import PostCard from './PostCard';

const GET_ALL_POST = gql`
  query MyQuery {
    posts {
      nodes {
        slug
        title
        date
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
        featuredImageDatabaseId
      }
    }
  }
`;

const PostsList = () => {
  const { loading, error, data } = useQuery(GET_ALL_POST);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error..</p>;

  //   const postsFound = Boolean(data?.posts.nodes.length)

  console.log(data.posts, 'data');

  return (
    <div>
      <p>fetch datas</p>
      {data.posts.nodes.map((post) => {
        return <PostCard post={post} />;
      })}
    </div>
  );
};

export default PostsList;
