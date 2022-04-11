import React, { useState, FC } from "react";
import UserTodos from "./UserTodos";
interface DisplayTextProps {
  getUserFullname: (username: string) => Promise<string>;
}
const DisplayText: FC<DisplayTextProps> = ({getUserFullname}) => {
  const [txt, setTxt] = useState("");
  const [msg, setMsg] = useState("");
  const [todoControl, setTodoControl] = useState<ReturnType<typeof UserTodos>>();
  const onChangeTxt = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTxt(e.target.value);
  }

  const onClickShowMsg = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setMsg(`Welcome to React testing, ${ await getUserFullname(txt)}`);
    setTodoControl(<UserTodos username={txt}/>);
  }

  // const setUsersTodos = async () => {
  //   const userResponse = await fetch('https://jsonplaceholder.typicode.com/users');
  //   if(userResponse.ok) {
  //     const users = await userResponse.json();
  //     const userByName = users.find((usr: any) => {
  //       return usr.username.toLowerCase() === txt
  //     });
  //     console.log("user by username", userByName);
  //     const todosResponse = await fetch('https://jsonplaceholder.typicode.com/todos');
  //     if(todosResponse.ok) {
  //       const todos = await todosResponse.json();
  //       const userTodos = todos.filter((todo: any) => {
  //         return todo.userId === userByName.id;
  //       });
  //       const todoList = userTodos.map((todo: any) => {
  //         return <li key={todo.id}>
  //           {todo.title}
  //         </li>
  //       });
  //       setTodos(todoList);
  //       console.log("user ntodos", userTodos);
  //     }
  //   }
  // }


  return (
    <form>
      <div>
        <label>
          Enter Your Name
        </label>
      </div>
      <div>
        <input type="text" data-testid="user-input"
          value={txt} onChange={onChangeTxt} />
      </div>
      <div>
        <button
          data-testid="input-submit"
          onClick={onClickShowMsg}
        >Show Message</button>
      </div>
      <div>
        <label data-testid="final-msg">{msg}</label>
      </div>
      <div>
        this is just a test entry
      </div>
      {todoControl}
    </form>
  )
}

export default DisplayText;