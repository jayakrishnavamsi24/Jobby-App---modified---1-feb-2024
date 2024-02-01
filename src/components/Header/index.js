import {Link, withRouter} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {BsBriefcaseFill} from 'react-icons/bs'
import {FiLogOut} from 'react-icons/fi'

import Cookies from 'js-cookie'

import './index.css'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <nav className="nav-header">
      <div className="nav-content">
        <div className="nav-bar-mobile-logo-container">
          <Link to="/">
            <img
              className="website-logo"
              src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
              alt="website logo"
            />
          </Link>
          <ul className="mobile-btn-container">
            <li>
              <Link to="/" className="nav-link">
                <AiFillHome style={{color: '#ffffff', fontSize: '22'}} />
              </Link>
            </li>
            <li>
              <Link to="/jobs" className="nav-link">
                <BsBriefcaseFill
                  style={{color: '#ffffff', fontSize: '22', marginLeft: '20'}}
                />
              </Link>
            </li>
            <li>
              <Link to="/">
                <button
                  type="button"
                  aria-label="logout"
                  className="nav-mobile-btn"
                  onClick={onClickLogout}
                >
                  <FiLogOut
                    style={{color: '#ffffff', fontSize: '22', marginLeft: '20'}}
                  />
                </button>
              </Link>
            </li>
          </ul>
        </div>

        <div className="nav-bar-large-container">
          <Link to="/">
            <img
              className="website-logo"
              src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
              alt="website logo"
            />
          </Link>
          <ul className="nav-menu">
            <li className="nav-menu-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>

            <li className="nav-menu-item">
              <Link to="/jobs" className="nav-link">
                Jobs
              </Link>
            </li>
          </ul>
          <Link to="/">
            <button
              type="button"
              className="logout-desktop-btn"
              aria-label="logout"
              onClick={onClickLogout}
            >
              Logout
            </button>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default withRouter(Header)
