import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import "./NavBar.css";

const NavBar = ({ categorias }) => {
  return (
    <nav>
      <div className="logo">
        <Logo/>
      </div>
      <div className="nav-wrapper teal darken-1">
        <ul className="nav-links">
          {categorias.map(
            (item) => (
              <li className="nav-link" key={item.id}>
                <Link to={`/categoria/${item.id}`}>{item.name}</Link>
              </li>

            )
          )}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
