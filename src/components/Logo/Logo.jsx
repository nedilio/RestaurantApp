import { Link } from 'react-router-dom';
import './Logo.css';
const Logo = () => {
  return (
    <div className="teal darken-1 center-align logo-container nav-wrapper">
        <Link to="/">
            <img src="/logo.png" alt="logo" className="responsive-img"/>
        </Link>
    </div>
  )
}

export default Logo