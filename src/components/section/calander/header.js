import React from "react";
import "font-awesome/css/font-awesome.min.css";
const HeaderCalander= () =>{
    return (
      <div className="row pt-3">
        <div className="col-4">
          <h3 className="f_left">November 2019</h3>
        </div>
        <div className="col-4">
          <h5 className="centerAlign">Today</h5>
          <p className="centerAlign">3 | sun</p>
        </div>
        <div className="col-4">
          <div className="form-group has-search searchCenter">
            <span className="fa fa-search form-control-feedback"></span>
            <input
              type="text"
              className="form-control"
              placeholder="Search"
            ></input>
          </div>
        </div>
        <div className="col-12 month_navigate">
          <ul>
            <li className="prev">&#10094;</li>
            <li className="next">&#10095;</li>
            <div className="grid grid_3">
              <li className="active">Month</li>
              <li>Week</li>
              <li>Day</li>
            </div>
          </ul>
        </div>
      </div>
    );
}
export default HeaderCalander;
