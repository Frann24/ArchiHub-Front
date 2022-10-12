import React, { useState } from 'react'
import Modal from '../modal/Modal'

function AvatarUser({img,size,sm="",md="",lg="",xl="",txl="", alt = "", className = "", action = false}) {
  const [overlayAvatar, setOverlayAvatar] = useState(false)

  const toggleOverlay = (e) => {
    e.preventDefault()
    setOverlayAvatar(!overlayAvatar)
  }

  return (
    <div>
      <div onClick={() => action && setOverlayAvatar(true)}>
        <img 
        className={`object-cover rounded-full ${className}
        w-${size} h-${size} 
        sm:w-${sm} sm:h-${sm} 
        md:w-${md} md:h-${md}
        lg:w-${lg} lg:h-${lg}
        xl:w-${xl} xl:h-${xl}
        txl:w-${txl} txl:h-${txl}
        `} src={img} alt={alt} />
      </div>
      <Modal active={overlayAvatar} toggle={toggleOverlay}>
        <img className="w-full min-h-[25vw] object-cover" src={img} alt="" />
      </Modal>
    </div>
  )
}

export default AvatarUser