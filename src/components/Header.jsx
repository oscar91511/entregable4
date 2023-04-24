import React from 'react'

const Header = ({ setIsShowForm }) => {
  const handleClickShowModal = () => {
    setIsShowForm((isShowForm) => !isShowForm)
  }

  return (
    <header className='flex justify-between items-center py-2 px-16 sm:px-16'>
      <h1 className='font-bold text-3xl'>Usuarios</h1>
      <button onClick={handleClickShowModal} className='bg-purple-p text-white px-4 py-2  hover:bg-purple-p/80 transition-colors text-sm'>
        <i className='bx bx-plus'></i>Crear nuevo usuario
      </button>
    </header>
  )
}

export default Header;