// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"
class Header extends React.Component {
  constructor() {
    super()
    this.toggleMenu = this.toggleMenu.bind(this)
    this.toggleLinks = this.toggleLinks.bind(this)
    this.state = {
      isOpened: false,
      menu: [],
    }
    this.fetchMenus()
  }
  fetchMenus() {
    setTimeout(() => {
      this.setState(oldState => {
        console.log(this.state)
        const newState = Object.assign({}, oldState)
        newState.menu = [
          {
            title: "Home",
            href: "/",
          },
          {
            title: "About",
            href: "/about",
          },
          {
            title: "Work",
            href: "/work",
          },
          {
            title: "Contact",
            href: "/contact",
          },
        ]
        return newState
      })
    }, 0)
  }

  toggleMenu() {
    this.setState(oldState => {
      const newState = Object.assign({}, oldState)
      newState.isOpened = !oldState.isOpened
      return newState
    })
  }

  toggleLinks() {
    this.setState(oldState => {
      const newState = Object.assign({}, oldState)
      newState.isOpened = !oldState.isOpened
      return newState
    })
  }

  render() {
    let classMain = "menu "
    let classBranding = "menu-branding "
    let classMenuNav = "menu-nav "
    let classBtn = "menu-btn "
    let navItem = "nav-item "

    if (this.state.isOpened) {
      classMain += "show"
      classBranding += "show"
      classMenuNav += "show"
      classBtn += "close"
      navItem += "show"
    }

    const listItems = this.state.menu.map((item, i) => {
      return (
        <li key={i} className={navItem}>
          <Link className="nav-link" to={item.href} onClick={this.toggleLinks}>
            <span>{item.title}</span>
          </Link>
        </li>
      )
    })

    return (
      <header>
        {/* <div className="logo">
          <Link className="logo__link" to='/'>
            <span>romkravets</span>
          </Link>
        </div> */}
        <div className={classBtn} onClick={this.toggleMenu}>
          <div className="btn-line"></div>
          <div className="btn-line"></div>
          <div className="btn-line"></div>
        </div>
        <div className={classMain}>
          <div className={classBranding}>
            {/* <div className="portrait"></div> */}
          </div>
          <ul className={classMenuNav}>{listItems}</ul>
        </div>
      </header>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
