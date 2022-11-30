import { useContext } from "react";
import UsersContext from "../context/UsersConext";

const useUsers = () => {
  const { user, setUser, loggedIn, setLoggedIn } = useContext(UsersContext);

  return {
    user,
    setUser,
    loggedIn,
    setLoggedIn,
  };
};

export default useUsers;
