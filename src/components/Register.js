import { useEffect, useState } from 'react'
import axios from 'axios'
import ShortUniqueId from 'short-unique-id';
import { useDispatch } from 'react-redux';
import { addEmployee, fetchEmployee } from '../features/employees';

const Register = () => {
  const [ inputName,setInputName ] = useState('')
  const [ inputEmail,setInputEmail ] = useState('')
  const [ inputPhone,setInputPhone ] = useState('')
  const [submitting,setSubmitting]=useState(false)
  // const [ inputPassword,setInputPassword ] = useState('')
  const[positon,setInputPositon]=useState('')
  const uid = new ShortUniqueId();

  const url = "http://localhost:8000/Employee";


  const handlePosition=e=>{
    setInputPositon(e.target.value)
  }
  const onChange1 = (e) =>{
    setInputName(e.target.value);
  }
  const onChange2 = (e) =>{
    setInputEmail(e.target.value);
  }
  const onChange3 = (e) =>{
    setInputPhone(e.target.value);
  }

// const dispatch=useDispatch()

// useEffect(()=>{
//   dispatch(addEmployee())
// },[dispatch])

// const hundleSubmit=()=>{
//   const data={
//     id: uid(),
//     name:inputName,
//     email:inputEmail,
//     phone:inputPhone,
//     position:positon
//   }
//   addEmployee(data)
//   fetchEmployee()



// }




  const submitData = (e) =>{
    e.preventDefault()
    setSubmitting(true)
    axios.post(url,{
      id: uid(),
      name:inputName,
      email:inputEmail,
      phone:inputPhone,
      position:positon
    }).then((res) =>
    console.log(res.data)  
    )
  }
    

  return (
    <div className='register'>
         
        <div className="container">
        <div className='dheader'>
            <h3>Add Employee</h3>
            </div>
            <form className='form' method='post' onSubmit={e=>submitting?"Is submitting..":submitData(e)} >
                <label>Name</label>
                <input type="text"  value={inputName} onChange={onChange1}/>
                <label>Email</label>
                <input type="email" value={inputEmail} onChange={onChange2}/>
                <label>Phone</label>
                <input type="text" value={inputPhone} onChange={onChange3}/>
                <label>Task</label>
                <input type="text" value={positon} onChange={handlePosition}/>
                <button className='btn'  type='submit'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Register