import React, { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {
    const data = useLoaderData()
    // const [data, setdata] = useState({})
    // useEffect(() => {
    //     const fetchcurr = async () => {
    //         try {
    //             let response = await fetch(`https://api.github.com/users/Sushank-Code`)
    //             if (!response.ok) {
    //                 throw new Error(`Error ${response.status}: ${response.statusText}`);
    //             }
    //             let res = await response.json();
    //             // console.log(res)
    //             setdata(res)
    //         }
    //         catch (error) {
    //             console.log(error);
    //         }
    //     }

    //     fetchcurr()
    // }, [])

    return (
        <div className='bg-gray-700 text-white text-3xl p-4 m-4 text-center'>GitHub Follower : {data.followers}</div>
    )
}

export default Github

export const githubInfoloader = async () => {
    let response = await fetch(`https://api.github.com/users/Sushank-Code`)   
    let res = await response.json();
    return res
}