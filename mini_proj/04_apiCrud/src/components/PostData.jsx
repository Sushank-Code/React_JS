import React, { useState, useEffect } from 'react'
import { postApiData, updateApiData } from '../api/Api'

const PostData = ({ apiGet, setapiGet, updatedata, setupdatedata }) => {

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
            setapiPost({ title: '', body: '' })
        }
    }

    const handleformSubmit = (e) => {
        e.preventDefault()
        const action = e.nativeEvent.submitter.value  // helps to which submit button was clicked based on it value
        if (action === "Add") {
            addPostData();
        }
        else if (action === "Edit") {
            update()
        }
    }
    // updating in ui and api
    const update = async () => {
        try {
            const res = await updateApiData(updatedata.id, apiPost)
            console.log(res)
            setapiGet((prev) => {
                return prev.map((curele) => {
                    return curele.id === updatedata.id ? res.data : curele
                })
            })
            setapiPost({ title: '', body: '' })
            setupdatedata({})
        } catch (error) {
            console.log(error)
        }
    }

    //  putting title and body in input field
    useEffect(() => {
        updatedata &&
            setapiPost({
                title: updatedata.title || "",
                body: updatedata.body || ""
            })
    }, [updatedata])

    let isempty = Object.keys(updatedata).length === 0

    return (
        <form onSubmit={handleformSubmit}>
            <div className="join mt-[40px] flex justify-center">
                <input type="text" className="input join-item" placeholder="Enter title" name='title'
                    value={apiPost.title}
                    onChange={handlepost}
                />
                <input type="text" className="input join-item" placeholder="Enter body" name='body'
                    value={apiPost.body}
                    onChange={handlepost}
                />
                <button className="btn join-item bg-warning" value={isempty ? "Add" : "Edit"} >{isempty ? "Add" : "Edit"}</button>
            </div>
        </form>
    )
}

export default PostData