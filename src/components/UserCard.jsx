import React from 'react'

const UserCard = ({user}) => {
  return (
    <article>
      <div>
        <img className='w-[100px] aspect-[3/5] object-cover mx-auto rounded-md' src={user.image_url} alt="" />
      </div>
      <h3>{user.first_name} {user.last_name}</h3>
      <ul>
        <li>
          <h4>correo</h4>
          <span>{user.email}</span>
        </li>
        <li>
          <h4>Cumpleaños</h4>
          <span>
            <i className="bx bx-gift"></i>
              {user.birthday}
          </span>
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
