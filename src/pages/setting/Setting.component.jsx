import React from 'react'
import './Setting.styles.scss';

export default function Setting() {
  return (
    <div className='Setting-container'>
        <div className="form-head">
            <span className="form-title">Update Your Account</span>
            <span className="form-delete">Delete Account</span>
        </div>
        <form className='settingForm'>
            <label className='profile-title'>Profile Picture</label>
            <div className="settingPP">
                <img src="https://images.unsplash.com/photo-1573496773905-f5b17e717f05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" alt="" className='profile-img' />
                <label htmlFor="fileInput">
                    <i class="user-profile-icon fa-solid fa-circle-user"></i>
                </label>
                <input type="file" id='fileInput' style={{display:"none"}} />
            </div>

            <div className="form-body">
                    <label>Username</label>
                    <input type="text" placeholder='Boopathi hari'/>
                
                    <label>Email</label>
                    <input type="email" placeholder='boopathihari2003@gmail.com'/>

                
                    <label>Password</label>
                    <input type="password"/>
              

            <button className='settingSubmit'>Update Profile</button>
            </div>
        </form>
    </div>
  )
}
