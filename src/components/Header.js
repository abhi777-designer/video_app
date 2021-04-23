import React from "react";

const Header = (props) => (
  <div className="navbar navbar-expand-md bg-dark navbar-dark">
    <a className="navbar-brand" href="/">
      Video
    </a>
    <div className="form-inline">
      <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text">
            <i className="fa fa-search" aria-hidden="true"></i>
          </span>
        </div>
        <input
          type="text"
          className="form-control"
          placeholder="Search..."
          onChange={props.onChange}
        />
      </div>
      {/* <ul className="search-list">
        {props.videos
          ?.slice(0, 5)
          .filter((val) => {
            if (props.searchValue === null) {
              return val;
            } else if (val.description.toLowerCase().includes(props.searchValue)) {
              return val;
            }
          })
          ?.map((val, key) => (
            <li className="listWordWrap" value={key}>
              {val.description}
            </li>
          ))}
      </ul> */}
    </div>
    <button type="button" className="resetButton" onClick={props.onClick}>
      Reset
    </button>

    <div
      className="collapse navbar-collapse justify-content-end"
      id="collapsibleNavbar"
    >
      {/* <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link text-light" href="/">
            All Videos
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="/">
            Footage
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="/">
            Motion Graphics
          </a>
        </li>
      </ul> */}
    </div>
  </div>
);

export default Header;
