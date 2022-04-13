import React, {FC} from "react";

interface ScreenCProps {
  message: string;
  history: any;
  match: any;
}

const ScreenC: FC<ScreenCProps>= (props) => {
  return (
    <div>
      <div>
        {"Your id is  " + props.match.userId}
      </div>
      <div>
        {props.message}
      </div>
    </div>
  )
};

export default ScreenC;