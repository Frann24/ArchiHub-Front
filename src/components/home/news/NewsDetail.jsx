import React from 'react'

export default function NewsDetail(props) {
  return (
    <div>
      <div>
      <div>
            <img src={e.image} width="600px" alt="news" />
            <div>{e.date}</div>
            <p className="font-[5100]">{e.title}</p>
            <div className="font-weight:200">{e.shortDescription}</div>

          </div>
        </div>
    </div>
  )
}
