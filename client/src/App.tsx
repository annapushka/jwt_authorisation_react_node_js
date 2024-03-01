import { useContext, useEffect, useState } from "react";
import LoginForm from "./components/LoginForm";
import { Context } from ".";
import { observer } from "mobx-react-lite";
import { IUser } from "./models/IUser";
import UserService from "./services/UserService";

function App() {
  const { store } = useContext(Context)
  const [users, setUsers] = useState<IUser[]>([])

  useEffect(() => {
    if(localStorage.getItem('token')) {
      store.checkAuth()
    }
  }, [])

  const getUsers = async () => {
    try {
      const response = await UserService.fetchUsers()
      setUsers(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  if(store.isLoading) {
    return <h1>Loading...</h1>
  }

  if(!store.isAuth) {
    return <LoginForm/>
  }

  return (
    <div className="App" style={{display: 'flex', gap: 8, flexDirection: 'column', width: 300, margin: 'auto'}}>
      <h1>{store.isAuth ? `User authorised ${store.user.email}` : "Please identify yourselves"}</h1>
      <h1>{store.user.isActivated ? 'Account confirmed by mail' : 'Please confirm the account by e-mail' }</h1>
      <button onClick={() => store.logout()}>Logout</button>

        <button onClick={getUsers}>Get user list</button>
        {users.length > 0 && (
        <>
            {users.length} users
            {users.map(user => <div key={user.id}>{user.email}</div>)}
        </>
        )}
    </div>
  );
}

export default observer(App);
