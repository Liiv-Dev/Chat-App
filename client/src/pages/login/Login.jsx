import { useState } from 'react'
import { Link } from 'react-router-dom'
import useLogin from '../../hooks/useLogin';

export default function Login() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const {loading, login} = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login({ userName, password })
  };
  
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-transparent bg-clip-padding backdrop-filter backdrop-blur-lg'>
        <h1 className='text-3xl font-semibold text-center text-white'>Login <span className='text-green-800'>Convo</span></h1>

      <form onSubmit={handleSubmit}>
        <div className='mb-2'>
          <label>
            <span className='text-green-800'>Username</span>
          </label>
          <input type="text" placeholder="Enter Username" className="input input-bordered input-success w-full max-w-xs"
          value={userName} onChange={(e) => setUserName(e.target.value)}
          />
        </div>

        <div className='mb-2'>
          <label>
            <span className='text-green-800'>Password</span>
          </label>
          <input type="password" placeholder="Enter Password" className="input input-bordered input-success w-full max-w-xs"
          value={password} onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Link to='/signup' className='text-white underline'>
          Dont Have An Account? Sign Up!
        </Link>
        <br />
        <button className="btn glass mt-2 text-green-800"
        disabled={loading}>
          {loading ? <span className='loading loading-spinner'></span> : 'Login'}
        </button>
      </form>

      </div>
    </div>
  )
}