import { Home } from "@mui/icons-material";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import "./NavBar.css";

const NavBar = ({ categorias }) => {
  return (
    <nav>
      <div className="logo">
        <Logo />
      </div>
      <div className="nav-wrapper ">
        <ul className="nav-links">
          <li className="nav-link waves-effect waves btn">
            <Link to="/">
            <i className="material-icons">home</i>
            </Link>
          </li>
          {categorias.map((item) => (
            <li className="nav-link waves-effect waves btn" key={item.id}>
              <Link to={`/categoria/${item.id}`}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
