import React from 'react';

function NavBar({user, setUser}) {
    function handleLogout() {
        fetch("/logout", { method: "DELETE" }).then((r) => {
          if (r.ok) {
            setUser(null);
          }
        });
      }
    return (
        <div className='nav-bar'>
            {/*add home navigation when otaku clicked*/}
            <p>Otaku</p>
            <button variant="outline" onClick={handleLogout}>Log out</button>
        </div>
    );
}

export default NavBar;