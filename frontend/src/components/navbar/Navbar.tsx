import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar: React.FC = () => {
  return (
    <>
      <h5 className="text-nav" style={{ fontFamily: 'Rock Salt, cursive' }}>
        The Classic Rock Band from the 70s The Doors and The Imaginary Tour
      </h5>
      <nav className="navbar navbar-light bg-dark ">
        <div className="container-fluid px-3">
          <Link className="navbar-brand" to="/" style={{ transform: 'rotate(-10deg)', display: 'inline-block' }}>
            <span className="seven" style={{ fontFamily: 'Rock Salt, cursive' }}>
              <span className="guitar">🎸</span>The 70's
            </span>
            <strong className="classic">
              Classic
              <strong style={{ fontFamily: 'Rock Salt, cursive' }} className="s-title">
                s
              </strong>
            </strong>
          </Link>

          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/ticket" className="btn btn-warning">
                Get your tickets here!
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
