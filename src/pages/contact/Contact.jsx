import React,{useState} from 'react'

const Contact = () => {
  const [message, setMessage] = useState({
    fullname: "",
    email: "",
    enquiry: "",
  })

  const [error, setError] = useState({
    fullname:"",
    email: "",
    enquiry: "",
  })

  
  const [feedback, setFeedback] = useState("");
  const [invalidFeedback, setInvalidFeedback] = useState("")
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleChange = (e) =>{
    const {name, value} = e.target;

    setMessage({...message, [name]: value})
    if(value){
      setError({...error, [name]:""});
    }
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    let newError = {};
    newError = {...error};

    if(!message.fullname.trim()){
      newError.fullname = "Fullname is required";
    
    }else if(message.fullname.trim().length < 4){
      newError.fullname = "Fullname cannot be less than 4 characters";
      console.log(message.fullname.length)
    
    }

    if(!message.email.trim()){
      newError.email = "Email is required";
    
    }else if(!emailRegex.test(message.email.trim())){
      newError.email = "Enter a valid email eddress";
    
    }

    if(!message.enquiry.trim()){
      newError.enquiry = "Enquires is required";
    }

    setError(newError);

    if(!newError.fullname && !newError.email && !newError.enquiry){
      setFeedback("Message Sent Sucessfully")
      setTimeout(()=>setFeedback(""), 3000)
      setMessage({
        fullname: "",
        email: "",
        enquiry: "",
      })
    }else{
      setInvalidFeedback("Input the correct details and try again!")
      setTimeout(()=>setInvalidFeedback(""), 3000);
    }
  }

  return (
    <div className='py-4 h-screen max-h-[500px] flex justify-center items-center'>
      <form 
        className='w-[350px] flex flex-col mx-auto gap-5 border-t-4 border-[#2c5157] border-solid px-4 py-6 rounded-lg shadow-xl'
        onSubmit={handleSubmit}
      >
        <p className='text-green-500 mx-auto'>{feedback}</p>
        <p className='text-red-500 mx-auto'>{invalidFeedback}</p>
        <input 
          className='w-full rounded-sm py-1 px-2 border-1 border-solid focus:ring-2 focus:outline-none focus:border-[#2c5157]'
          type="text" 
          placeholder='Fullname'
          name='fullname'
          value={message.fullname}
          onChange={handleChange}
        />
        <p className='text-sm text-red-500'>{error.fullname}</p>
        <input 
          className='w-full rounded-sm py-1 px-2 border-1 border-solid focus:outline-none focus:ring-2 focus:ring-[#2c5157]'
          type="email" 
          placeholder='Email Address'
          name='email'
          value={message.email}
          onChange={handleChange}
        />
        <p className='text-sm text-red-500'>{error.email}</p>
        <textarea 
          className='w-full rounded-sm py-1 px-2 border-1 border-solid focus:outline-none focus:ring-2 focus:ring-[#2c5157]'
          type="text" 
          placeholder='Enquires'
          name='enquiry'
          value={message.enquiry}
          onChange={handleChange}
        ></textarea>
        <p className='text-sm text-red-500'>{error.enquiry}</p>
        <div className='flex gap-2'>
          <input type="checkbox" name="news" id="news" />
          <p className='text-sm'>Sign Up For Our Newsletter</p>
        </div>
        <button className='bg-[#2c5157] p-1 text-white rounded-sm'>
          Send A Message
        </button>
      </form>
    </div>
  )
}

export default Contact