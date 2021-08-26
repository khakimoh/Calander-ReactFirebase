import React from "react";
import bar from "../../../main-folder/js/getTaskComplete";
import sendTaskToComplete from "../../../main-folder/js/sendTaskToComplete";
const Task = (props) => {
  return (
    <div>
      {bar.GetTask(props.date).map((task) => (
        <li onClick={()=>sendTaskToComplete(task)}>
          <div>{task.tittle}</div>
          <div>{task.date} November</div>
        </li>
      ))}
    </div>
  );
};
const Complete = (props) => {
  return (
    <div>
      {bar.GetComplete(props.date).map((task) => (
        <li className="list-group-item">{task.tittle}</li>
      ))}
    </div>
  );
};
export default {Task,Complete};
