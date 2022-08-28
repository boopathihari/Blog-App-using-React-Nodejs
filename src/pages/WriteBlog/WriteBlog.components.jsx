import './WriteBlog.styles.scss'

export default function WriteBlog() {
  return (
    <div className='write-container'>
        <form className='writeForm'>
            <img src="https://images.unsplash.com/photo-1573496773905-f5b17e717f05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" alt="" className='blog-img'/>
        <div className="writeFormGroup">
            <label htmlFor="fileInput">
                <i class="writeIcon fa-solid fa-plus"></i>
            </label>
            <input type="file" id='fileInput' style={{display:"none"}} />
            <input type="text" placeholder='Title' className='writeInput' autoFocus={true} />
        </div>
        <div className="writeFormGroup">
            <textarea  placeholder='Tell your story...' type='text' className='writeInput writeText'></textarea>
        </div>

        <button className='writeSubmit'>Publish</button>
        </form>
    </div>
  )
}
