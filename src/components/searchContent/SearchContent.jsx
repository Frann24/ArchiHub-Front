import React from 'react'
import { useLocation } from 'react-router-dom'
import SearchbarContent from './SearchbarContent'

function SearchContent() {
  const {search} = useLocation()

  return (
    <div>
      <p>{`SEARCH RESULTS FOR: "${search.slice(1,-1)}"`}</p>
      <SearchbarContent/>
    </div>
  )
}

export default SearchContent