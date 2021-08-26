import React, { Component, useState } from "react";
import firebase from "./connectFirebase";
window.onload = function(){ 
    // Get the modal
    var modal = document.getElementById("myModal");
    document.getElementById("myBtn").onclick = function () {
      modal.style.display = "block";
    };
    document.getElementsByClassName("close")[0].onclick = function () {
      modal.style.display = "none";
    };
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
};
function AddTaskEntryForm() {
  const [tittle, setTittle] = useState("");
  const [date, setDate] = useState("");
  function onSubmit(e) {
    e.preventDefault();
    if(date>0 && date<=30){
      firebase.firestore().collection(`date${date}`).add({
        tittle,
        date,
        status: "task",
      });
    }

  }
  return (
    <div>
      <div id="myModal" class="modal">
        <div class="modal-content">
          <span class="close">&times;</span>
          <form onSubmit={onSubmit} class="grid grid_modal">
            <input
              type="text"
              value={tittle}
              onChange={(e) => setTittle(e.currentTarget.value)}
              placeholder="Task"
              class="modalTask"
            />
            <input
              type="text"
              value={date}
              onChange={(e) => setDate(e.currentTarget.value)}
              placeholder="Enter date number(0:30)"
              class="modalDate"
            />
            <button class="modalButton">ADD</button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default AddTaskEntryForm;
