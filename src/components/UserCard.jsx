import React from "react";

const UserCard = ({ user, deleteUser, handleClickEdit }) => {
  return (
    <article className="border-2 rounded-[4px] p-4 ">
      <div>
        <img
          className=" w-[100px]  aspect-[3/5] object-cover
         mx-auto rounded-md"
          src={user.image_url ? user.image_url : "/images/no_profile.jpg"}
          alt="No image"
        />
      </div>
      <h3 className=" grid text-[16px] font-roboto py-3 font-bold  top-[243px] text-[rgba(15,15,45,1)]">
        {user.first_name} {user.last_name}
      </h3>
      <ul>
        <li>
          <h4 className="uppercase text-gray-300 font-bold text-[15px]">correo</h4>
          <span className="text-[15px]">{user.email}</span>
        </li>
        <li>
          <h4 className="uppercase font-bold py-3 text-gray-300">Cumpleaños</h4>
          <span className="bx py-1 tracking-wider -translate-y-4 bx-gift">
            <i className="px-0.5" ></i>
            {user.birthday}
          </span>
        </li>
      </ul>
      <div class="translate-x-2 flex justify-end">
        <button className=" border-1 px-2 h-[30px] rounded-[4px] text-white bg-red-400 grid-cols-2 " onClick={() => deleteUser(user.id)}>
          <i className="bx bx-trash"></i>
        </button>
        <button className=" border-2 mx-2 px-2 h-[30px] rounded-[4px] border-gray-300 text-gray-200 bg-gray-100 grid-cols-2 " onClick={() => handleClickEdit(user)}>
          <i className=" text-gray-400 bx  bxs-pencil"></i>
        </button>
      </div>
    </article>
  );
};

export default UserCard;
