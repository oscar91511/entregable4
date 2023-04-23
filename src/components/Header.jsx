import React from 'react'


const Header = ({setIsShowForm}) => {

const handleClickShowModal = () => {
    setIsShowForm((isShowForm) => !isShowForm)
}


  return (
    <header className=' sm:items-center items-center'>
        <h1 className='font-bold text-[30px]'>Usuarios</h1>

        <button onClick={handleClickShowModal} className="bg-purple-p w-[170px]
         text-white p-2 hover:bg-purple-p/80 cursor-pointer transition-colors text-sm">
            <i className='bx bx-plus'></i>Crear nuevo usuario</button>
    </header>

  )
}

export default Header;