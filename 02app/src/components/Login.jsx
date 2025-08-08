import React from 'react'
function Login({ email }) {
  return (
    <div className='flex flex-col gap-y-4 items-center'>
      <input
        type="email"
        placeholder="Enter your email"
        className="bg-white text-black px-4 py-2 rounded"
        defaultValue={email}
      />
      <input
        type="password"
        placeholder="Enter your password"
        className="bg-black text-white px-4 py-2 rounded"
      />
      <button className="bg-blue-500 px-4 py-2 rounded text-white">Login</button>
    </div>
  )
}
export default Login;