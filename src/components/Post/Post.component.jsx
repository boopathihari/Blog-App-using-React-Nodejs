import React from 'react'
import './Post.styles.scss';

export default function Post() {
  return (
    <div className='Post-container'>
      <div className="Post-header">
        <img src="https://images.unsplash.com/photo-1573496773905-f5b17e717f05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" className='post-img' alt="" />
      </div>
      <div className="Post-body">
        <div className="post-cats">
            <div className="postcat"><span className='badge'>Music</span></div>
            <div className="postcat"><span className='badge'>Arts</span></div>
        </div>
        <div className="post-title"><h2>Full stack web developer</h2></div>
        <div className="post-timestamp">1 hour ago</div>
        <div className="post-content">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus laborum quisquam illum, dolore itaque placeat quod mollitia dicta quis ex ea sapiente iste, alias, tenetur natus? Perspiciatis omnis deserunt aperiam?
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero velit omnis magnam, pariatur illum alias sit repudiandae saepe laborum iusto necessitatibus iure quasi quae tenetur, consectetur veniam! Dignissimos, tenetur esse.
        </div>
      </div>
    </div>
  )
}
