import React from 'react'

let UserContext=React.createContext();

const UserProvider= UserContext.Provider;

export default UserContext;

export {UserProvider};