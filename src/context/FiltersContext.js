import React, { createContext, useState } from "react";

const FiltersContext = createContext()

export function FiltersProvider ({ children }) {

    const [ filters, setFilters ] = useState([])

    const addFilter = filter => {
        if (filters.indexOf(filter) === -1) setFilters(prevState => [...prevState, filter])
    }
    const removeFilter = filter => {
        if (filters.indexOf(filter) > -1) setFilters(prevState => prevState.filter(val => val !== filter))
    }
    const resetFilters = () => setFilters([])

    return (
        <FiltersContext.Provider value={{ filters, addFilter, removeFilter, resetFilters }}>
            {children}
        </FiltersContext.Provider>
    )
} 

export default FiltersContext