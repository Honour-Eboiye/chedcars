import React, {useState} from 'react'

const SimpleForm = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  return (
    <div>
      <form className='shadow-2xl max-w-[400px] p-3 flex flex-col gap-2 mx-auto my-10'>
        <label htmlFor="fullname">Fullname</label>
        <input type="text" id='fullname' className='w-full border-1 rounded-sm h-7 px-2' placeholder='Full Name' value={name} onChange={(e) => setName(e.target.value.trim())}/>
        <label htmlFor="email">Email</label>
        <input type="email" id='email' className='w-full border-1 rounded-sm h-7 px-2' placeholder='Enter Email Address' value={email} onChange={(e) => setEmail(e.target.value.trim())}/>
        <button className='rounded-md bg-blue-700 text-white py-1'>
          Submit
        </button>
      </form>
    </div>
  )
}

export default SimpleForm