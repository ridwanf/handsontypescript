import React, {createContext, useState} from "react";
import UserNameComp from "./UserNameComp";
import UserAgeComp from "./UserAgeComp";

export const TestContext = createContext<{username: string,userage: number}>
  ({username: "", userage: 0});
const ContextTester = () => {
  const [userage, setUserage] = useState(20);
  const [localState, setLocalState] = useState(0);
  const onClickAge = () => {
    setUserage(userage+1);
  }
  const onClickLocalState = () => {
    setLocalState(localState + 1);
  }
  return (
    <React.Fragment>
      <button onClick={onClickAge}>Update</button>
      <TestContext.Provider value={{username: "ridwan2", userage}}>
        <UserAgeComp/>
        <UserNameComp/>
      </TestContext.Provider>
      <UserNameComp />
      <br />
      <button onClick={onClickLocalState}>Update localstate</button> &nbsp;
      <label htmlFor="">
        {localState}
      </label>
    </React.Fragment>
  )
}

export default ContextTester