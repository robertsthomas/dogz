import React, { useState } from 'react'
import { Button, FormControl, InputGroup } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { searchByBreed } from '../redux/actions'

import './sample.css'

interface BaseProps {
  breeds: any
}

const Search: React.FC<BaseProps> = ({ breeds }) => {
  const [query, setQuery] = useState('')
  const [filteredOptions, setFilteredOptions] = useState([])
  const [showOptions, setShowOptions] = useState(false)

  const dispatch = useDispatch()

  const handleOnInputChange = (e) => {
    const searchQuery = e.currentTarget.value
    const filteredOptions = breeds.filter((item) => item.indexOf(query) > -1)

    setFilteredOptions(filteredOptions)
    setShowOptions(true)
    setQuery(searchQuery)

    console.log(filteredOptions.length)
  }

  const onQueryClick = (e: any) => {
    // Set State
    setFilteredOptions([])
    setShowOptions(false)
    setQuery(e.currentTarget.innerText)

    dispatch(searchByBreed(e.currentTarget.innerText))
  }

  const renderSuggestions = () => {
    if (showOptions && query) {
      if (filteredOptions.length > 0) {
        return (
          <ul className="option-list">
            {filteredOptions.map((option, idx) => (
              <li key={option} onClick={onQueryClick} className="option">
                {option}
              </li>
            ))}
          </ul>
        )
      }
    }
    if (filteredOptions.length === 0 && query) {
      if(!showOptions){
        return null
      }
      return <div className="no-results">No Results</div>
    }
  }

  return (
    <div>
      <div className="search-container">
        <input
          className="input"
          type="text"
          value={query}
          placeholder="Search"
          aria-label="Search"
          onChange={handleOnInputChange}
        />

        <div className="button-append">
          <button className="button">Search</button>
        </div>
      </div>
      {renderSuggestions()}
    </div>
  )
}

export default Search
