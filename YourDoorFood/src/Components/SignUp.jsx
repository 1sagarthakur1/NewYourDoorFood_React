import { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { addCustomer } from '../Api/customerApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Sign() {
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [gender, setGender] = useState();
  const [mobilenumber, setMobilNumber] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const submitForm = async () => {
    event.preventDefault();
    const data = {
      name: name,
      age: age,
      gender: gender,
      mobileNumber: mobilenumber,
      email: email,
      password: password
    }
    const response = await addCustomer("http://localhost:8888/api/YourDoorFood/customers/create_account", data)
    // console.log(response)
    if (response.message) {
      toast.error(response.message, {
        position: "top-center"
      })
    }
    
    if (response.name) {
      toast.success("Customer Add Successfully", {
        position: "top-center"
      })
      setTimeout(()=>{
        window.location.replace('/loginSignUp');
      },2000)
    }
  }


  return (
    <>
      <div className="container">
        <div className="heading">Sign Up</div>
        <form onSubmit={submitForm} action="" className="form">
          <input required className="input" type="taxt" name="name" id="name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
          <div>
            <input required className="input" type="number" name="age" id="age" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} />
            <select required className="input" name="gender" id="gender" placeholder="Password" value={gender} onChange={(e) => setGender(e.target.value)}>
              <option value="MALE">MALE</option>
              <option value="FEMALE">FEMALE</option>
              <option value="OTHER" >OTHER</option>
            </select>
          </div>
          <input required className="input" type="number" name="mobilenumber" id="mobilenumber" placeholder="Mobile Number" value={mobilenumber} onChange={(e) => setMobilNumber(e.target.value)} />
          <input required className="input" type="email" name="email" id="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input required className="input" type="password" name="password" id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <span className="forgot-password"><a href="#">Forgot Password ?</a></span>
          <input className="login-button" type="submit" value="Sign Up" />
        </form>
        <div className="social-account-container">
          <span className="title">I have all ready account <NavLink to="/loginSignUp/login">login</NavLink></span>
        </div>
        <span className="agreement"><a href="#">Learn user licence agreement</a></span>
      </div>
      <ToastContainer />
    </>
  )
}
