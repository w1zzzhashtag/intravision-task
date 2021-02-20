import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import styles from './NavBar.module.scss'
import logoImg from './../../assets/images/logo.png'
import knowledgeImg from './../../assets/images/navbar/knowledge.png'
import bidsImg from './../../assets/images/navbar/bids.png'
import employeesImg from './../../assets/images/navbar/employees.png'
import clientsImg from './../../assets/images/navbar/clients.png'
import assetsImg from './../../assets/images/navbar/assets.png'
import settingsImg from './../../assets/images/navbar/settings.png'


const NAV_ITEMS = [
  { id: 1, name: 'База знаний', pathUrl: '/knowledge', img: knowledgeImg },
  { id: 2, name: 'Заявки', pathUrl: '/bids', img: bidsImg },
  { id: 3, name: 'Сотрудники', pathUrl: '/employees', img: employeesImg },
  { id: 4, name: 'Клиенты', pathUrl: '/clients', img: clientsImg },
  { id: 5, name: 'Активы', pathUrl: '/assets', img: assetsImg },
  { id: 6, name: 'Настройки', pathUrl: '/settings', img: settingsImg },
]

const NavBar: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <Link to="/" className={styles.logo}>
        <img src={logoImg} alt="logo" className={styles.logo__img} />
      </Link>

      <nav className={styles.nav}>
        {NAV_ITEMS.map(item => (
          <NavLink to={item.pathUrl}
            key={item.id}
            className={styles.nav__item}
            activeClassName={styles.active}
          >
            <img src={item.img}
              alt={item.name}
              className={styles.nav__item__img} />
            <span className={styles.nav__item__name}>
              {item.name}
            </span>
          </NavLink>
        ))}
      </nav>
    </div>
  )
}

export default NavBar
