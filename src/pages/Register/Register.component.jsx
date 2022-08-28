import './Register.styles.scss';
import { Link } from 'react-router-dom';

export default function Register() {
  return (
    <div className='login'>
      <div className="RegisterForm">
      <span className="loginTitle">Register</span>
      <form className="loginForm">
        <label>Username</label>
        <input type="text" className="loginInput" placeholder='Enter your Username...' />
        <label>Email</label>
        <input type="email" className="loginInput" placeholder='Enter your email...' />
        <label>Password</label>
        <input type="password" className="loginInput" placeholder='Enter your Password...' />
        <button className="RegisterButton">Register</button>
      </form>
      </div>

      <button className='LoginButton'>
        <Link className='link' to='/login'>Login</Link>
      </button>
    </div>
  )
}

