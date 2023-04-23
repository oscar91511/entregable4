import React from 'react'

const UserCard = ({user}) => {
  return (
    <article>
      <div>
        <img src="{user.image_url}" alt="" />
      </div>
      <h3></h3>
      <ul>
        <li>
          <h4>correo</h4>
          <span></span>
        </li>
        <li>
          <h4>Cumpleaños</h4>
          <span></span>
          <i className="bx bx-gift"></i>
        </li>
      </ul>
      <div>
        <button>
          <i className="bx bx-trash"></i>
        </button>
        <i className="bx bxs-pencil"></i>
      </div>
    </article>
  )
}

export default UserCard