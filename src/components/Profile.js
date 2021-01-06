import React from 'react'
import { useHistory } from "react-router-dom"
import {getCurrentUser} from '../services/auth.service'


//css
import '../css/Profile.css'

const Profile = () => {
    const currentUser = getCurrentUser()
    const history = useHistory()

     const switchBetweenPages = () =>{
         history.push("/favorites")
     }

   




    return(
        <div className='container'>
            <button>Info</button>
            <button onClick={switchBetweenPages}>Favorites</button>
           
           <div className="profileDiv">
                <h3>
                    <strong>{currentUser.username}</strong>
                </h3>
                <h6>{currentUser.email}</h6>
                {/* <h6>{currentUser.id}</h6> */}
          </div>
            {/* <p>
                <strong>Token:</strong>{currentUser.accessToken.substring(0, 20)}...{" "}
            </p> */}
            {/* <p>
                <strong>My User Id:</strong> {currentUser.id}
            </p>
            <p>
                <strong>My Email:</strong> {currentUser.email}
            </p> */}
            {/* if current user has roles, map through and display them */}
            {/* {currentUser.roles &&
            currentUser.roles.map((role, index)=> <li key={index}>{role}</li>)} */}
            {/* {favorites.map((favorite, index)=> <li key={index}>{favorite}</li>)} */}
            
          
        </div>
    )
}

export default Profile