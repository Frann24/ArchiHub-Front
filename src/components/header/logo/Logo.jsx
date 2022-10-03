import React from 'react'
import { Link } from 'react-router-dom'

function Logo() {
  return (
      <h2 /* className="py-2 xl:text-4xl font-light text-center inline" */
      className="text-2xl font-light
      lg:text-3xl
      "
      >
        <Link to="/home">
        <span className="font-semibold">ARQUI</span>HUB
        </Link>
      </h2>
  )
}

export default Logo