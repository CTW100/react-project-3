import React, { useState } from 'react';
import UserInput from './components/UserInput';
import UserList from './components/UserList';

function App() {
  const [NewuserList, setNewUserList] = useState([]);
  let userList = [];

  const onAddUserInputHandler = (newUserList) => {
    setNewUserList([...userList, newUserList]);
  };

  return (
    <div>
      <UserInput onAddUserInput={onAddUserInputHandler} />
      <UserList allUserList={NewuserList} />
    </div>
  );
}

export default App;
