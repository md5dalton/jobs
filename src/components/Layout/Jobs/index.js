import React, { useContext } from 'react'
import List from '../../UI/List'
import Job from './Job'
import FiltersContext from '../../../context/FiltersContext'

import jobs from "./data.json"

import "./styles.sass"

export default () => {
    
    const { filters } = useContext(FiltersContext)
    /* 
        - To filter jobs based on filters
        - Using destructuring, get languages and tools arrays from each job
        - Using rest, merge the 2 arrays and filter them to find if they contain any element from filters
    */

    // fn to return jobs that match current filters
    const filterJobs = jobs => jobs.filter(({ languages, tools }) => [...languages, ...tools].filter(value => filters.includes(value)).length ) 
    
    const availableJobs = filters.length ? filterJobs(jobs) : jobs

    return (
        <div id="jobs">
            {
                jobs ?
                <List items={availableJobs} itemHandler={(item, index) => <Job key={index} {...item} />} /> :
                <div className="msg notice">No job listings are available</div>
            }
        </div>
    )
}