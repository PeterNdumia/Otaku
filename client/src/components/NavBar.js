import React from 'react';
import { useNavigate } from 'react-router-dom';

function NavBar({user, setUser}) {
    const navigate = useNavigate()
    function handleLogout() {
        fetch("/logout", { method: "DELETE" }).then((r) => {
          if (r.ok) {
            setUser(null);
          }
        });
      }

      function handleHome(){
        navigate("/")
      }
   
      if(!user)
      return(
        <div className='nav-bar'>
        {/*add home navigation when otaku clicked*/}
        <p onClick={handleHome}>Otaku</p>
       
    </div>
      );
    return (
        <div className='nav-bar'>
            {/*add home navigation when otaku clicked*/}
            <p onClick={handleHome}>Otaku</p>
            <button  onClick={handleLogout}>Log out</button>
        </div>
    );
}

export default NavBar;