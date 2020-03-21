import React from "react"
import headerStyles from "../styles/components/header.module.scss"
import { Link } from "gatsby"

const Header = () => (
  <div className={headerStyles.header}>
    <Link to="/" activeClassName={headerStyles.activeNavItem}>
      ホーム
    </Link>
    <Link to="/blog" activeClassName={headerStyles.activeNavItem}>
      ブログ
    </Link>
    <Link to="/contact" activeClassName={headerStyles.activeNavItem}>
      お問い合わせ
    </Link>
  </div>
)

export default Header
