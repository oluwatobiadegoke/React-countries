import React, { useState, useEffect, useContext, useCallback } from 'react'
const url = "https://restcountries.eu/rest/v2/name/";

const AppContext = React.createContext();

const AppProvider = ({children}) => {
    const [input, setInput] = useState('a');
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [displayRegion, setDisplayRegion] = useState(false);

    const getCountries = useCallback(async () => {
        setLoading(true);
        try {
            const response = await fetch(`${url}${input}`);
            const data = await response.json();
            if(data) {
                const newData = data.map((item) => {
                    const {
                        callingCodes, 
                        name, 
                        region, 
                        flag, 
                        capital, 
                        population,
                        numericCode
                    } = item;
                    return {
                        id:numericCode,
                        name,
                        region,
                        flag,
                        capital,
                        population,
                        num:callingCodes
                    }
                })
                setCountries(newData)
            } else {
                setCountries([])
            }
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    },[input])

    const regionalDisplay = () => {
        setDisplayRegion(!displayRegion);
    }

    useEffect(() => {
        getCountries();
    }, [input, getCountries])

    return (
        <AppContext.Provider value={{
            countries,
            loading,
            input,
            setInput,
            setCountries,
            displayRegion,
            regionalDisplay,
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const  useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppProvider, AppContext}