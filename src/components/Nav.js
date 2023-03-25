import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLocationDot, faPaintbrush } from '@fortawesome/free-solid-svg-icons';

export function Nav() {
  return (
    <nav>
      <ul role="menubar">
        <li role="tab"> <NavLink exact to='/gallery' activeClassName="active-tab"><FontAwesomeIcon icon={faPaintbrush} /> Gallery</NavLink> </li>
        <li role="tab"> <NavLink exact to='/sellers' activeClassName="active-tab"><FontAwesomeIcon icon={faLocationDot} /> Sellers</NavLink> </li>
        <li role="tab"> <NavLink exact to="/profile" activeClassName="active-tab"><FontAwesomeIcon icon={faUser} /> Profile</NavLink> </li>
        
      </ul>
    </nav>
  );
}
