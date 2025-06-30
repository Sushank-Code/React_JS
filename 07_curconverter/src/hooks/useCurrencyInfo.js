import React, { useState, useEffect } from 'react'

function useCurrencyInfo(currency) {
    const [data, setdata] = useState({})
    useEffect(() => {

        const fetchcurr = async () => {
            try {
                let response = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
                if (!response.ok) {
                    throw new Error(`Error ${response.status}: ${response.statusText}`);
                }
                let res = await response.json();
                setdata(res[currency])  // Here object of usd is created ( note : api has nested obj)
                // console.log(data)
            }
            catch (error) {
                console.log(error);
            }
        }

        fetchcurr()
    }, [currency])
    return (
        data
    )
}

export default useCurrencyInfo