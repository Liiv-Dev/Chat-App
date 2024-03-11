import React from 'react'
import Gender from './Gender'

function SignUp() {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
    <div className='w-full p-6 rounded-lg shadow-md bg-transparent bg-clip-padding backdrop-filter backdrop-blur-lg'>
      <h1 className='text-3xl font-semibold text-center text-white'>Sign Up <span className='text-green-800'>Convo</span></h1>

    <form>
      <div className='mb-2'>
        <label>
          <span className='text-green-800'>Email</span>
        </label>
        <input type="text" placeholder="Enter Email" className="input input-bordered input-success w-full max-w-xs" />
      </div>

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

      <div className='mb-2'>
        <label>
          <span className='text-green-800'>Confirm Password</span>
        </label>
        <input type="password" placeholder="Confirm Password" className="input input-bordered input-success w-full max-w-xs" />
      </div>

      <Gender />

      <a href='#' className='text-white'>
        Have An Account? Login!
      </a>
      <br />
      <button className="btn glass mt-2 text-green-800">Sign Up</button>
    </form>

    </div>
  </div>
  )
}

export default SignUp