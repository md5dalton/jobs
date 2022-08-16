import React, { useContext } from 'react'
import FiltersContext from '../../../../context/FiltersContext'
import Button from '../../../UI/Button'
import List from '../../../UI/List'

export default ({ 
        logo, 
        company, 
        position, 
        postedAt, 
        contract, 
        location, 
        languages, 
        tools, 
        new: isNew, 
        featured: isFeatured 
    }) => {
    
        const { addFilter } = useContext(FiltersContext)
        
        return (
            <div className="job">
                <div className="company-logo">
                    <img src={logo} alt="company logo" />
                </div>
                <div className="details">
                    <div>
                        <div className="company-name">{company}</div>
                        <div className="status">
                            { isNew && <div className="new">new!</div> }
                            { isFeatured && <div className="featured">featured</div> }
                        </div>
                    </div>
                    <div>
                        <div className="position">{position}</div>
                    </div>
                    <div className="captions">
                        <div className="caption">{postedAt}</div>
                        <div className="caption">{contract}</div>
                        <div className="caption">{location}</div>
                    </div>
                </div>
                <div className="tags">
                    <List items={[ ...languages, ...tools ]} itemHandler={(item, index) => <Button key={index} onClick={() => addFilter(item)}>{item}</Button>} />
                </div>
            </div>
        )
}