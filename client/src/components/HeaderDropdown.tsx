import '../assets/css/First.css';
import {categoryList} from '../types';
import { Link } from 'react-router-dom';
import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";

function HeaderDropdown() {
  return (

          <div className="Categories">
              <button className="Categories_button">
                  <FontAwesomeIcon icon={faBars} /> Categories
                  <div className="dropdown-options">
                          {categoryList.map((item) =>    <li>
                              <Link  className="each-category" to ="/categories">
                                  {item.name}</Link></li>)}
                  </div>
              </button>
          </div>

)
}
export default HeaderDropdown

