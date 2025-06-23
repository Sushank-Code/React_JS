import React, { useState, useCallback, useEffect, useRef } from 'react'

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

            for (let i = 1; i <= length; i++) {
                let char = Math.floor(Math.random() * str.length + 1)
                pass += str.charAt(char)
            }
            setPassword(pass)
        },
        [length, numallow, challow, setPassword],
    )

    useEffect(() => {
        pwGenerator()
    }, [length, numallow, challow, pwGenerator])

    const pwref = useRef(null)

    const copyPasswordToClipboard = useCallback(
      () => {
        pwref.current?.select()
        // pwref.current?.setSelectionRange(0,5)  // For giving selection range
        window.navigator.clipboard.writeText(password)
      },
      [password],
    )
    

    return (
        <>
            <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-50 bg-gray-800 text-orange-500">
                <h1 className='text-white text-center my-2'>Password Generator</h1>

                {/* input and button */}

                <div className="flex shadow rounded-lg overflow-hidden mb-4">
                    <input
                        type="text"
                        value={password}
                        className='outline-none w-full py-1 px-3 bg-white'
                        placeholder='password'
                        readOnly
                        ref={pwref}
                    />
                    <button
                        onClick={copyPasswordToClipboard}
                        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 cursor-pointer hover:bg-sky-700'
                    >copy</button>
                </div>

                {/* slider & checkbox */}

                <div className='flex text-sm gap-x-2'>
                    <div className='flex items-center gap-x-1'>
                        <input type="range"
                            min={8}
                            max={30}
                            value={length}
                            className='cursor-pointer'
                            onChange={(e) => setLength(e.target.value)}
                        />
                        <label>Length: {length}</label>
                    </div>

                    <div className="flex items-center gap-x-1">
                        <input
                            type="checkbox"
                            defaultChecked={numallow}
                            id="numberInput"
                            onChange={() =>
                                setNumallow((prev) => !prev)
                            }
                        />
                        <label htmlFor="numberInput">Numbers</label>
                    </div>
                    <div className="flex items-center gap-x-1">
                        <input
                            type="checkbox"
                            defaultChecked={challow}
                            id="charInput"
                            onChange={() =>
                                setChallow((prev) => !prev)
                            }
                        />
                        <label htmlFor="charInput">Character</label>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Generator