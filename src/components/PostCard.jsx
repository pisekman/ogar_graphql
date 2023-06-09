import React from 'react';
import { Link } from 'react-router-dom';

const formatDate = (date) => new Date(date).toLocaleDateString();

export default function PostCard({ post }) {
  const { title, date, slug, featuredImage, content } = post;

  const substractedText = content.substring(
    0,
    content.indexOf('</p>'),
  );

  console.log(featuredImage, 'featuredImage');

  return (
    <div className='post-card'>
      {featuredImage ? (
        <img
          src={featuredImage.node.sourceUrl}
          alt={featuredImage.node.altText}
          style={{ height: '350px' }}
        />
      ) : null}
      <div className='post-card--text'>
        <Link to={`/blog/${slug}`}>
          <h3>{title}</h3>
        </Link>

        <div className='metadata'>
          <p>
            <span className='text-bold'>Date:</span>{' '}
            {formatDate(date)}
          </p>
          <div
            dangerouslySetInnerHTML={{ __html: substractedText }}
          />
        </div>
      </div>
    </div>
  );
}
