import React, { useState } from 'react'
import { postApiData } from '../api/Api'

const PostData = ({ apiGet, setapiGet }) => {

    // taking data from multiple input field
    const [apiPost, setapiPost] = useState({
        title: "",
        body: ""
    })
    const handlepost = (e) => {     // logic for handling multiple input field
        const name = e.target.name
        const value = e.target.value
        setapiPost((prev) => {
            return {
                ...prev,
                [name]: value,       // [](square bracket mean dynamic key )
            }
        })
    }

    //axios post api logic
    const addPostData = async () => {
        const res = await postApiData(apiPost)
        console.log(res)
        if (res.status === 201) {                  // 200 = get & 201 = post
            setapiGet([...apiGet, res.data])
            setapiPost({title:'',body:''})
        }
    }

    const handleformSubmit = (e) => {
        e.preventDefault()
        addPostData();
    }

    return (
        <form action="" onSubmit={handleformSubmit}>
            <div className="join mt-[40px] flex justify-center">
                <input type="text" className="input join-item" placeholder="Enter title" name='title'
                    value={apiPost.title}
                    onChange={handlepost}
                />
                <input type="text" className="input join-item" placeholder="Enter body" name='body'
                    value={apiPost.body}
                    onChange={handlepost}
                />
                <button className="btn join-item bg-warning" >Add</button>

            </div>
        </form>
    )
}

export default PostData