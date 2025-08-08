import React, {useEffect, useState} from 'react'

function App() {
  let [email, setEmail] = useState('')
  let [password, setPassword] = useState('')
  const greeting = () => {
    // alert(`Email ${email}\nPassword ${password}`)
    const e = "shuvajitpal103@gmail.com"
    const pass = "123abc"
    if(email==e){
      if(password==pass) alert("Login Successfully!")
      else alert("Wrong Password!")
    }else alert("Wrong Email")
  }
  const grabEmail = (event) => setEmail(event.target.value)
  const grabPassword = (event) => setPassword(event.target.value)
  const submit = ()=> alert("Welcome User")
  useEffect(() =>{
    submit()
  },[])
  return (
    <div className='h-screen w-screen bg-red-50 flex flex-col justify-center items-center gap-y-5'>
      <input type="email" placeholder='Enter Your Email Here!' className='border border-black py-2 px-1 rounded-lg' onChange={grabEmail}/>
      <input type="password" placeholder='Enter Password!' className='border border-black py-2 px-1 rounded-lg' onChange={grabPassword}/>
      <button type='Submit' className='flex justify-center bg-sky-500/50 px-2 py-2 rounded-lg hover:px-7 hover:py-3' onClick={greeting}>Submit</button>
    </div>
  )
}

export default App