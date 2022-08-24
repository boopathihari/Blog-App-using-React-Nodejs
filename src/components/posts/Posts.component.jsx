import React from 'react'
import Post from '../Post/Post.component';
import './Posts.styles.scss';

export default function posts() {
  return (
    <div className='posts-container'>
      <Post></Post>
      <Post></Post>
      <Post></Post>
      <Post></Post>
      <Post></Post>
      <Post></Post>
    </div>
  )
}
