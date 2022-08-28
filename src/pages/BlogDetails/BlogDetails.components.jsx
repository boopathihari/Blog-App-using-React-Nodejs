import './BlogDetails.styles.scss';

export default function BlogDetails() {
  return (
    <div className='BlogDetails-container'>
        <img src="https://images.unsplash.com/photo-1573496773905-f5b17e717f05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" alt="" className='blogDetails-img'/>
        <div className="blogInfo">
            <div className="Blog-title-info">
                <h1 className='Blog-title'>
                    Full Stack Web Developer 
                <div className="action-icon">
                    <i class="blog-Icon fa-solid fa-pen-to-square"></i>
                    <i class="blog-Icon fa-solid fa-trash-can"></i>
                </div>
                </h1>
            </div>

            <div className="BlogAuthor">
                <p className="Author">Author : Boopathi Hari</p>
                <p className="time">1 hour ago</p>
            </div>
            
            <div className="blog-content">
                <p className='content'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta dignissimos qui voluptatum veniam fuga minima optio obcaecati? Maiores numquam earum sapiente quia in error ad aliquid. Inventore, sequi! Expedita quibusdam amet consequuntur laboriosam ex debitis aspernatur ad voluptatem tempora, sapiente architecto! Delectus sapiente, suscipit voluptas culpa debitis deleniti molestiae nobis tempora explicabo, et cupiditate facere sint exercitationem a error? Maiores.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt culpa, omnis impedit expedita nihil excepturi voluptatibus debitis. Enim explicabo rerum excepturi natus tempora praesentium fugit adipisci, ducimus, eum eveniet quaerat.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt culpa, omnis impedit expedita nihil excepturi voluptatibus debitis. Enim explicabo rerum excepturi natus tempora praesentium fugit adipisci, ducimus, eum eveniet quaerat.</p>
                
            
            </div>
        </div>
        
    </div>
  )
}
