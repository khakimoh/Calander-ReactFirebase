import React from "react";
import useTask from "../../../main-folder/js/readFirebase";
const DaysTable = () => {
    return (
      <ul className="days grid grid_7">
        <li>
          <div></div>
        </li>
        <li>
          <div></div>
        </li>
        <li>
          <div></div>
        </li>
        <li>
          <div></div>
        </li>
        <li>
          <div className="calander_number">1</div>
          {
            useTask(1).map((task)=>
            <div className="task">{task.tittle}</div>
          )}
        </li>
        <li>
        <div className="calander_number">2</div>
          {
            useTask(2).map((task)=>
            <div className="task">{task.tittle}</div>
          )}
        </li>
        <li>
        <div className="calander_number"><span className="active">3</span></div>
          {
            useTask(3).map((task)=>
            <div className="task">{task.tittle}</div>
          )}
        </li>
        <li>
          <div className="calander_number">4</div>
          {
            useTask(4).map((task)=>
            <div className="task">{task.tittle}</div>
          )}
        </li>
        <li>
          <div className="calander_number">5</div>
          {
            useTask(5).map((task)=>
            <div className="task">{task.tittle}</div>
          )}
        </li>
        <li>
          <div className="calander_number">6</div>
          {
            useTask(6).map((task)=>
            <div className="task">{task.tittle}</div>
          )}
        </li>
        <li>
          <div className="calander_number">7</div>
          {
            useTask(7).map((task)=>
            <div className="task">{task.tittle}</div>
          )}
        </li>
        <li>
          <div className="calander_number">8</div>
          {
            useTask(8).map((task)=>
            <div className="task">{task.tittle}</div>
          )}
        </li>
        <li>
          <div className="calander_number">9</div>
          {
            useTask(9).map((task)=>
            <div className="task">{task.tittle}</div>
          )}
        </li>
        <li>
          <div className="calander_number">10</div>
          {
            useTask(10).map((task)=>
            <div className="task">{task.tittle}</div>
          )}
        </li>
        <li>
          <div className="calander_number">11</div>
          {
            useTask(11).map((task)=>
            <div className="task">{task.tittle}</div>
          )}
        </li>
        <li>
          <div className="calander_number">12</div>
          {
            useTask(12).map((task)=>
            <div className="task">{task.tittle}</div>
          )}
        </li>
        <li>
          <div className="calander_number">13</div>
          {
            useTask(13).map((task)=>
            <div className="task">{task.tittle}</div>
          )}
        </li>
        <li>
          <div className="calander_number">14</div>
          {
            useTask(14).map((task)=>
            <div className="task">{task.tittle}</div>
          )}
        </li>
        <li>
          <div className="calander_number">15</div>
          {
            useTask(15).map((task)=>
            <div className="task">{task.tittle}</div>
          )}
        </li>
        <li>
          <div className="calander_number">16</div>
          {
            useTask(16).map((task)=>
            <div className="task">{task.tittle}</div>
          )}
        </li>
        <li>
          <div className="calander_number">17</div>
          {
            useTask(17).map((task)=>
            <div className="task">{task.tittle}</div>
          )}
        </li>
        <li>
          <div className="calander_number">18</div>
          {
            useTask(18).map((task)=>
            <div className="task">{task.tittle}</div>
          )}
        </li>
        <li>
          <div className="calander_number">19</div>
          {
            useTask(19).map((task)=>
            <div className="task">{task.tittle}</div>
          )}
        </li>
        <li>
          <div className="calander_number">20</div>
          {
            useTask(20).map((task)=>
            <div className="task">{task.tittle}</div>
          )}
        </li>
        <li>
          <div className="calander_number">21</div>
          {
            useTask(21).map((task)=>
            <div className="task">{task.tittle}</div>
          )}
        </li>
        <li>
          <div className="calander_number">22</div>
          {
            useTask(22).map((task)=>
            <div className="task">{task.tittle}</div>
          )}
        </li>
        <li>
          <div className="calander_number">23</div>
          {
            useTask(23).map((task)=>
            <div className="task">{task.tittle}</div>
          )}
        </li>
        <li>
          <div className="calander_number">24</div>
          {
            useTask(24).map((task)=>
            <div className="task">{task.tittle}</div>
          )}
        </li>
        <li>
          <div className="calander_number">25</div>
          {
            useTask(25).map((task)=>
            <div className="task">{task.tittle}</div>
          )}
        </li>
        <li>
          <div className="calander_number">26</div>
          {
            useTask(26).map((task)=>
            <div className="task">{task.tittle}</div>
          )}
        </li>
        <li>
          <div className="calander_number">27</div>
          {
            useTask(27).map((task)=>
            <div className="task">{task.tittle}</div>
          )}
        </li>
        <li>
          <div className="calander_number">28</div>
          {
            useTask(28).map((task)=>
            <div className="task">{task.tittle}</div>
          )}
        </li>
        <li>
          <div className="calander_number">29</div>
          {
            useTask(29).map((task)=>
            <div className="task">{task.tittle}</div>
          )}
        </li>
        <li>
          <div className="calander_number">30</div>
          {
            useTask(30).map((task)=>
            <div className="task">{task.tittle}</div>
          )}
        </li>
      </ul>
    );
}
export default DaysTable;
