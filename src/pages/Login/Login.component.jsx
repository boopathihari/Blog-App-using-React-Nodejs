import '../Register/Register.styles.scss';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div className='login'>
      <div className="RegisterForm">
      <span className="loginTitle">Login</span>
      <form className="loginForm">
        <label>Email</label>
        <input type="text" className="loginInput" placeholder='Enter your email...' />
        <label>Password</label>
        <input type="password" className="loginInput" placeholder='Enter your Password...' />
        <button className="RegisterButton">Login</button>
      </form>
      </div>
      
      <button className='LoginButton'>
        <Link className='link' to='/register'>Register</Link>
      </button>
      
    </div>
  )
}
