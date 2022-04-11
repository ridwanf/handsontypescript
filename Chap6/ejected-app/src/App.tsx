import React from 'react';
// import logo from './logo.svg';
import './App.css';
import DisplayText from './DisplayText';

function App() {
  const getUserFullname = async (username: string): Promise<string> => {
    const usersResponse = await fetch('http://jsonplaceholder.typicode.com/users');
    if(usersResponse.ok) {
      const users = await usersResponse.json();
      const userByName = users.find((usr: any) => {
        return usr.username.toLowerCase() === username;
      });
      return userByName.name;
    }
    return "";
  }
  return (
    <div className="App">
      <DisplayText getUserFullname={getUserFullname} />
    </div>
  );
}

export default App;
