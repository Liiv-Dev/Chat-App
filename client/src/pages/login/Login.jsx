import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-transparent bg-clip-padding backdrop-filter backdrop-blur-lg'>
        <h1 className='text-3xl font-semibold text-center text-white'>Login <span className='text-green-800'>Convo</span></h1>

      <form>
        <div className='mb-2'>
          <label>
            <span className='text-green-800'>Username</span>
          </label>
          <input type="text" placeholder="Enter Username" className="input input-bordered input-success w-full max-w-xs" />
        </div>

        <div className='mb-2'>
          <label>
            <span className='text-green-800'>Password</span>
          </label>
          <input type="password" placeholder="Enter Password" className="input input-bordered input-success w-full max-w-xs" />
        </div>
        <Link to='/signup' className='text-white underline'>
          Dont Have An Account? Sign Up!
        </Link>
        <br />
        <button className="btn glass mt-2 text-green-800">Login</button>
      </form>

      </div>
    </div>
  )
}