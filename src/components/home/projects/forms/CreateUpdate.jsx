import React from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const CreateUpdate = () => {
        
  return (
    <div>
        <form>
            <div></div>
            <input type="text" placeholder='Title...'/>
            <input type="text" placeholder='comments...'/>
            <input type="file" />
        </form>
    </div>
  )
}

export default CreateUpdate