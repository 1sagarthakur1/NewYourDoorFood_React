import { NavLink } from 'react-router-dom';
import '../Styles/navbar.css';
import { currentUser } from '../Api/customerApi';
import { useEffect, useState } from 'react';
import logo from '../Images/logoYourDoorFood.png'


export default function Navbar() {
  const [usename, setUserName] = useState();

  useEffect(() => {
    async function getCurrentUserDetails() {
      const response = await currentUser("http://localhost:8888/api/YourDoorFood/customers/view_profile");
      if (response.status == 202) {
        const data = await response.json();
        setUserName(data.name)
      }
    }
    getCurrentUserDetails();
  }, [])


  return (
    <nav className='navbar'>
      <div className='logoDiv'>
        <img src={logo} />
      </div>
      <div className='nav_right'>
        <svg xmlns="http://www.w3.org/2000/svg" fill='#990000' height="24" viewBox="0 -960 960 960" width="24"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" /></svg>
        <ul>
          <li className='home'>
            <NavLink to="/">
              Home
            </NavLink>
          </li>
          {usename ?
            <li className='order'>
              <NavLink to="/order">
                Order
              </NavLink>
            </li> : ""
          }
          {usename ? <li className='cart'>Cart</li> : ""}
          {usename ? "" :
            <li>
              <NavLink to="/loginSignUp">
                <svg xmlns="http://www.w3.org/2000/svg" height="15px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-120v-80h280v-560H480v-80h280q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H480Zm-80-160-55-58 102-102H120v-80h327L345-622l55-58 200 200-200 200Z" /></svg>
              </NavLink>
            </li>
          }
          {usename ?
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill='#990000'><path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z" /></svg>
             : ""}
        </ul>
      </div>
    </nav>
  )
}
