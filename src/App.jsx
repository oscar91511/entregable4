import axios from "axios";
import "./App.css";
import Modal from "./components/Modal";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import { useForm } from "react-hook-form";
import UsersList from "./components/UsersList";

const BASE_URL = "https://users-crud.academlo.tech";

function App() {
  const [users, setUsers] = useState([])
  const [isShowForm, setIsShowForm] = useState(false)

  const {register, handleSubmit, reset} = useForm()

  const submit = (data) => {
    createUser(data)

  }

  const createUser = (data) => {
    const URL = BASE_URL + "/users/"

    axios
    .post(URL, data)
    .then (() => {
      getAllUsers()
      reset({
        firt_name: "",
        last_name: "",
        email: "",
        password: "",
        birtday: "",
        image_url: "",
      })
      setIsShowForm(!isShowForm)
    })
    .catch ((err) => console.log(err))
  }
 
  const getAllUsers = () => {
    const URL = BASE_URL + "/users/";

    axios
      .get(URL)
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAllUsers();
  }, []);
  return (
    <main className="font-sans">

      <Modal register={register} 
      handleSubmit={handleSubmit} 
      isShowForm={isShowForm} 
      setIsShowForm={setIsShowForm}
      submit={submit} />
      <Header setIsShowForm={setIsShowForm}/>
      <UsersList users={users}/>


    </main>
  )
}

export default App;
