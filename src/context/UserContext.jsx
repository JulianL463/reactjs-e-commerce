import React, { createContext, useState } from "react"

export const UserContext = createContext();
const { Provider } = UserContext;

const UserContextProvider = ({ children }) => {

    const [user, setUser] = useState({});

    const saveUser = (name, email)=>{
        setUser({...user, name: name, email: email});
    }

    return (
        <Provider value={{ user, saveUser }}> {children} </Provider>
    )
}

export default UserContextProvider