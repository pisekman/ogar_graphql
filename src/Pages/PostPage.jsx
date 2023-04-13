import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { Link, useParams } from 'react-router-dom';
import PostPageContent from '../components/PostPageContent';
const GET_POST_BY_SLUG = gql`
  query getPostBySlug($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      title
      date
      content
      categories {
        nodes {
          slug
          name
        }
      }
      author {
        node {
          name
        }
      }
    }
  }
`;

const PostPage = () => {
  const { slug } = useParams();
  console.log(slug, 'props');
  const { loading, error, data } = useQuery(GET_POST_BY_SLUG, {
    variables: {
      slug: slug,
    },
  });

  const postFound = Boolean(data?.post);

  return (
    <div className='page-container'>
      <Link to='/'>← Home</Link>
      {loading ? (
        <p>Loading…</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : !postFound ? (
        <p>Post could not be found.</p>
      ) : (
        <PostPageContent post={data.post} />
      )}
    </div>
  );
};

export default PostPage;
