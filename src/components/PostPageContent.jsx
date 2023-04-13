import React from 'react';

const PostPageContent = ({ post }) => {
  const { title, content } = post;
  return (
    <article className='container postPage'>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: content }}></div>
    </article>
  );
};

export default PostPageContent;
