import React, { useEffect, useState } from 'react'
import { deleteApiData, getApiData } from '../api/Api'
import PostData from './PostData'

const GetData = () => {
    // console.log(getApiData())
    const [apiGet, setapiGet] = useState([])
    const [error, seterror] = useState(null)
    const [updatedata, setupdatedata] = useState({})

    const fetchAPi = async () => {
        try {
            const res = await getApiData()
            setapiGet(res.data)
            // console.log(res.data)
            seterror(null)
        } catch (error) {
            seterror("No data Found")
            setapiGet(null)
        }
    }
    useEffect(() => {
        fetchAPi()
    }, [])

    // handling delete in api and Ui
    const handledelete = async (id) => {
        try {
            const res = await deleteApiData(id)
            if (res.status == 200) {
                const newUpdatedData = apiGet.filter((curval) =>
                    curval.id !== id
                )
                setapiGet(newUpdatedData)
            }
        } catch (error) {
            seterror("Error occured")
        }
    }

    // handling update in api and ui
    const handleUpdate = (val) => setupdatedata(val)

    return (
        <>
            <PostData apiGet={apiGet} setapiGet={setapiGet} updatedata={updatedata} setupdatedata={setupdatedata} />
            <div className='flex flex-wrap justify-evenly gap-y-4 mt-10'>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                {
                    apiGet ? (
                        apiGet.map((val) => (
                            <div className="card bg-neutral text-neutral-content w-96" key={val.id}>
                                <div className="card-body items-center text-center">
                                    <p>{val.id}</p>
                                    <h2 className="card-title border">{val.title}</h2>
                                    <p className='text-justify'>{val.body}</p>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-outline btn-success"
                                            onClick={() => { handleUpdate(val) }}>Edit</button>
                                        <button className="btn btn-ghost bg-error"
                                            onClick={() => { handledelete(val.id) }}>Delete</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No data present</p>
                    )
                }
            </div>
        </>

    )
}

export default GetData