import { NavLink, Link } from "react-router-dom";
import { Icon } from "semantic-ui-react";
const NavBar = ({ user }) => {
  return (
    <div className="navBar">
      <Link to="/" id="logo">
        <Icon name="camera" />
        <div>
          <h3>pictogram</h3>
        </div>
      </Link>
      <div className="welcome">Welcome {user}</div>
      <nav className="navButtons">
        <NavLink className="homeBtn" to="/">
          Home
        </NavLink>
        <NavLink className="sketchPadBtn" to="/sketch-pad">
          Sketch Pad
        </NavLink>
        <NavLink className="mySketchesBtn" to="/my-sketchs">
          My Sketches
        </NavLink>
      </nav>
    </div>
  );
};

export default NavBar;
