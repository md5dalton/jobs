import React, { useContext } from 'react'
import FiltersContext from '../../../context/FiltersContext'
import Button from '../../UI/Button'
import List from '../../UI/List'
import Filter from './Filter'

import "./styles.sass"

export default () => {
    
    const { filters, removeFilter, resetFilters } = useContext(FiltersContext)
    
    if (filters.length) return (
        <div id="filters">
            <List items={filters} itemHandler={(item, index) => <Filter key={index} name={item} removeFilterHandler={removeFilter} />} />
            <Button className="terciary" onClick={() => resetFilters()}>clear</Button>
        </div>
    )
}