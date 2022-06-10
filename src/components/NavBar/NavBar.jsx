import CartWidget from "./CartWidget";
import NavLink from "./NavLink";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav>
      <div className="nav-wrapper">
        <a href="#" className="brand-logo">
          RoraimaBike
        </a>
        <ul>
          <NavLink title="Home" />
          <NavLink title="Mantenimiento" />
          <NavLink title="Repuestos" />
          <NavLink title="Protecciones" />
        </ul>
        <CartWidget items={5} />
      </div>
    </nav>
  );
};

export default NavBar;
