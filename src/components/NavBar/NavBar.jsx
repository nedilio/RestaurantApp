import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav>
      <div className="nav-wrapper">
        <Link className="brand-logo" to="/">MenuApp</Link>
        <ul>
          <li>
            <Link to="/assad">Link</Link>
          </li>
          <li>
            <Link to="/hjkjhk">Link 2</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
