import React, {useState} from 'react'

const ComplexForm = () => {
  const [user, setUser] = useState({
    name:"",
    email:"",
    address:"",
  })


  const handleData = (e) =>{
    setUser({...user, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log(user);
    setUser({
      name: '',
      email: '',
      location: '',
    });
  }
  // if(user.name ===""){
  //   setError("ERROR")
  // }

  return (
    <div>
      <form className='shadow-2xl max-w-[400px] p-3 flex flex-col gap-2 mx-auto my-9' onSubmit={handleSubmit}>
        <label htmlFor="fullname">Fullname</label>
        <input type="text" id='fullname' className='w-full border-1 rounded-sm h-7 px-2' placeholder='Full Name' value={user.name} name='name' onChange={handleData}/>
        <label htmlFor="email">Email</label>
        <input type="email" id='email' className='w-full border-1 rounded-sm h-7 px-2' placeholder='Enter Email Address' value={user.email} name='email' onChange={handleData}/>
        <label htmlFor="address">Location</label>
        <input type="textarea" id='address' className='w-full border-1 rounded-sm h-15 px-2' placeholder='Enter Your Address' value={user.address} name='address' onChange={handleData}/>

        <button className='rounded-md bg-blue-700 text-white py-1'>
          Submit
        </button>
        <p className='text-red-600'>{error}</p>
      </form>
    </div>
  )
}

export default ComplexForm