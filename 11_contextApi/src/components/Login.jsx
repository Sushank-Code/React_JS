import React, { useContext, useState } from 'react'
import userContext from '../context/userContext'

const Login = () => {
    const [username, setusername] = useState('')
    const [pass, setpass] = useState('')

    const { setUser } = useContext(userContext)
    function handleSubmit(e) {
        e.preventDefault()
        setUser({username, pass})
    }
    return (
        <div>
            <h1> LOgin </h1>
            <label htmlFor="username"> User name :</label>
            <input type="text" id="username"
                style={{ width: '200px', height: '30px', fontSize: '20px' }}
                value={username}
                onChange={(e) => setusername(e.target.value)}
            />
            <label htmlFor="pass"> Password :</label>
            <input type="text" id="pass"
                style={{ width: '200px', height: '30px', fontSize: '20px' }}
                value={pass}
                onChange={(e) => setpass(e.target.value)}
            />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )

}

export default Login