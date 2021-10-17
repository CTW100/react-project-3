import { useState } from 'react';

const UserInput = (props) => {
  const [userName, setUserName] = useState('');
  const [userAge, setUserAge] = useState('');

  const UserNameHandler = (event) => {
    setUserName(event.target.value);
  };

  const UserAgeHandler = (event) => {
    setUserAge(event.target.value);
  };

  const UserSubmitHandler = (event) => {
    event.preventDefault();

    const user = { username: userName, userage: userAge };
    props.onAddUserInput(user);
  };

  return (
    <form onSubmit={UserSubmitHandler}>
      <div>
        <label for='username'>Username</label>
        <input
          type='text'
          name='username'
          id='username'
          onChange={UserNameHandler}
        />
      </div>

      <div>
        <label for='age'>Age (Years)</label>
        <input type='number' name='age' id='age' onChange={UserAgeHandler} />
      </div>

      <button type='submit'>Add User</button>
    </form>
  );
};

export default UserInput;
