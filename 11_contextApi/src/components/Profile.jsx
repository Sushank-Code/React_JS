import React,{useContext} from 'react'
import userContext from '../context/userContext'

const Profile = () => {
    const { user } = useContext(userContext)
    
    if(!user) return <div> Login required </div>

    return <div>{user.username}</div>
}

export default Profile