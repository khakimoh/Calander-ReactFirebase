import React, { Component } from "react";
import AddTaskEntryForm from "../main-folder/js/addFirebase";
import setBar from "./section/taskbar/SetBar";
const TaskBar = () => {
  return (
    <div>
      <div className="row under_border d-md-none sm-responsive1">
        <div className="col-6">
          <img
            src={process.env.PUBLIC_URL + `/images/Avatar.jpg`}
            className="img-fluid avatar"
          />
        </div>
        <div className="col-6 p-0">
          <div className="avatar_text1">Good Morning</div>
          <div className="avatar_text2">Nate!</div>
        </div>
      </div>
      <div className="task sm-responsive3">
        <div className="row under_border d-none d-md-flex">
          <div className="col-6">
            <img
              src={process.env.PUBLIC_URL + `/images/Avatar.jpg`}
              className="img-fluid avatar"
            />
          </div>
          <div className="col-6 p-0">
            <div className="avatar_text1">Good Morning</div>
            <div className="avatar_text2">Nate!</div>
          </div>
        </div>
        <div className="row">
          <div className="col-6 col-md-12">
            <div className="row task_box">
              <button class="Task" id="myBtn">
                <span class="addTask">ADD Task</span>
              </button>
              <AddTaskEntryForm />
              <ul className="task">
                <setBar.Task date="1" />
                <setBar.Task date="2" />
                <setBar.Task date="3" />
                <setBar.Task date="4" />
                <setBar.Task date="5" />
                <setBar.Task date="6" />
                <setBar.Task date="7" />
                <setBar.Task date="8" />
                <setBar.Task date="9" />
                <setBar.Task date="10" />
                <setBar.Task date="11" />
                <setBar.Task date="12" />
                <setBar.Task date="13" />
                <setBar.Task date="14" />
                <setBar.Task date="15" />
                <setBar.Task date="16" />
                <setBar.Task date="17" />
                <setBar.Task date="18" />
                <setBar.Task date="19" />
                <setBar.Task date="20" />
                <setBar.Task date="21" />
                <setBar.Task date="22" />
                <setBar.Task date="23" />
                <setBar.Task date="24" />
                <setBar.Task date="25" />
                <setBar.Task date="26" />
                <setBar.Task date="27" />
                <setBar.Task date="28" />
                <setBar.Task date="29" />
                <setBar.Task date="30" />
              </ul>
            </div>
          </div>
          <div className="col-6 col-md-12 levelAlign-md">
            <button className="Task" onClick={hiddenComplete}>
              <span className="completeButton">Complete</span>
            </button>
            <div
              className="row task_box"
              id="hiddenCompleteDiv"
              style={{ marginTop: "5px", visibility: "visible" }}
            >
              <ul
                className="list-group list-group-flush"
                id="hiddenCompleteUl"
                style={{ visibility: "visible" }}
              >
                <setBar.Complete date="1" />
                <setBar.Complete date="2" />
                <setBar.Complete date="3" />
                <setBar.Complete date="4" />
                <setBar.Complete date="5" />
                <setBar.Complete date="6" />
                <setBar.Complete date="7" />
                <setBar.Complete date="8" />
                <setBar.Complete date="9" />
                <setBar.Complete date="10" />
                <setBar.Complete date="11" />
                <setBar.Complete date="12" />
                <setBar.Complete date="13" />
                <setBar.Complete date="14" />
                <setBar.Complete date="15" />
                <setBar.Complete date="16" />
                <setBar.Complete date="17" />
                <setBar.Complete date="18" />
                <setBar.Complete date="19" />
                <setBar.Complete date="20" />
                <setBar.Complete date="21" />
                <setBar.Complete date="22" />
                <setBar.Complete date="23" />
                <setBar.Complete date="24" />
                <setBar.Complete date="25" />
                <setBar.Complete date="26" />
                <setBar.Complete date="27" />
                <setBar.Complete date="28" />
                <setBar.Complete date="29" />
                <setBar.Complete date="30" />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
function hiddenComplete() {
  let Div = document.getElementById("hiddenCompleteDiv").style.visibility;
  let ul = document.getElementById("hiddenCompleteUl").style.visibility;
  if (ul == "visible" && Div == "visible") {
    document.getElementById("hiddenCompleteUl").style.visibility = "hidden";
    document.getElementById("hiddenCompleteDiv").style.visibility = "hidden";
  } else {
    document.getElementById("hiddenCompleteUl").style.visibility = "visible";
    document.getElementById("hiddenCompleteDiv").style.visibility = "visible";
  }
}
export default TaskBar;
