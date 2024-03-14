import React from 'react'
import Gender from './Gender'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import useSignup from '../../components/hooks/useSignup'

function SignUp() {

  const [input, setInput] = useState({
    fullName: '',
    userName: '',
    password: '',
    confirmPassword: '',
    gender: ''
  });

  const [loading, signup] = useSignup();

  const handleCheckBox = (gender) => {
    setInput({ ...input, gender: gender });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(input); 
    console.log(input);
  }

  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
    <div className='w-full p-6 rounded-lg shadow-md bg-transparent bg-clip-padding backdrop-filter backdrop-blur-lg'>
      <h1 className='text-3xl font-semibold text-center text-white'>Sign Up <span className='text-green-800'>Convo</span></h1>

    <form onSubmit={ handleSubmit }>
      <div className='mb-2'>
        <label>
          <span className='text-green-800'>Full Name</span>
        </label>

        <input type="text" placeholder="Enter Name" className="input input-bordered input-success w-full max-w-xs" value={input.fullName} 
        onChange={(e) => setInput({ ...input, fullName: e.target.value })} 
        />

      </div>

      <div className='mb-2'>
        <label>
          <span className='text-green-800'>Username</span>
        </label>

        <input type="text" placeholder="Enter Username" className="input input-bordered input-success w-full max-w-xs" value={input.userName} 
        onChange={(e) => setInput({ ...input, userName: e.target.value })} 
        />

      </div>

      <div className='mb-2'>
        <label>
          <span className='text-green-800'>Password</span>
        </label>
        <input type="password" placeholder="Enter Password" className="input input-bordered input-success w-full max-w-xs" 
        value={input.password}
        onChange={(e) => setInput({ ...input, password: e.target.value })}
        />
      </div>

      <div className='mb-2'>
        <label>
          <span className='text-green-800'>Confirm Password</span>
        </label>
        <input type="password" placeholder="Confirm Password" className="input input-bordered input-success w-full max-w-xs" 
        value={input.confirmPassword}
        onChange={(e) => setInput({ ...input, confirmPassword: e.target.value })}
        />
      </div>

      <Gender onCheckBox = { handleCheckBox } selectedGender={input.gender} />

      <Link to='/login' className='text-white underline'>
        Have An Account? Login!
      </Link>
      <br />
      <button className="btn glass mt-2 text-green-800">Sign Up</button>
    </form>

    </div>
  </div>
  )
}

export default SignUp