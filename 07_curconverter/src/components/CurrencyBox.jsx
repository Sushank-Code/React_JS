import React, { useState } from 'react'
import useCurrencyInfo from '../hooks/useCurrencyInfo'

const CurrencyBox = () => {
    const [cur, setcur] = useState('')
    // const [output, setoutput] = useState('')
    const data = useCurrencyInfo(cur)
    const options = Object.keys(data)
    const optionsval = Object.values(data)

    return (

        <>
            <div>
                <label htmlFor=""> Enter the currency</label>
                <input
                    className='border'
                    type="text"
                    value={cur}
                    onChange={(e) => setcur(e.target.value)}
                />
                <p> {options} : {optionsval} </p>
            </div>
        </>
    )
}

export default CurrencyBox