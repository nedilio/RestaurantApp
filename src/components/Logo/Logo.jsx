import { Link } from 'react-router-dom';
import logoUrl from '../../img/logo-example.png';
import logoUrl2 from '../../img/logoipsum-logo-5.svg';
import './Logo.css';

const Logo = () => {
  return (
    <div className="teal darken-1 center-align logo-container nav-wrapper">
        <Link to="/">
            <img src={logoUrl2} alt="logo" className="responsive-img"/>
        </Link>
    </div>
  )
}

export default Logo