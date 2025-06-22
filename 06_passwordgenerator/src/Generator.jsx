import React, { useState, useCallback } from 'react'

const Generator = () => {
    const [length, setLength] = useState(8)
    const [numallow, setNumallow] = useState(false)
    const [challow, setChallow] = useState(false)
    const [password, setPassword] = useState("")

    const pwGenerator = useCallback(
        () => {
            let pass = ""
            let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
            if (numallow) str += "0123456789"
            if (challow) str += "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"

            for (const i of str) {
                let char = Math.floor(Math.random() * str.length + 1)
                pass += str.charAt(char)
            }
        },
        [length, numallow, challow, setPassword],
    )

    return (
        <>
            <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
                <h1 className='text-white text-center my-3'>Password generator</h1>

                // input and button
                <div className="flex shadow rounded-lg overflow-hidden mb-4">
                    <input
                        type="text"
                        value={password}
                        className='outline-none w-full py-1 px-3 bg-white'
                        placeholder='password'
                        readOnly
                    />
                    <button
                        // onClick={copyPasswordToClipboard}
                        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
                    >copy</button>
                </div>

                //slider & checkbox

                <div className='flex text-sm gap-x-2'>
                    <div className='flex items-center gap-x-1'>
                        <input type="range"
                            min={8}
                            max={30}
                            value={length}
                            className='cursor-pointer'
                            onChange={()=>{}}
                        />
                        <label>Length: {length}</label>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Generator