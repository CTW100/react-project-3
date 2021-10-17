const UserList = (props) => {
  console.log(props.allUserList);
  return <div>{props.allUserList[0].username}</div>;
};

export default UserList;
