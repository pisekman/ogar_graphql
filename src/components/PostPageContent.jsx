import React from 'react';

const PostPageContent = ({ post }) => {
  const { title } = post;
  return (
    <article>
      <h1>{title}</h1>
    </article>
  );
};

export default PostPageContent;
