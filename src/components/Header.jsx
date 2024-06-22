import { NavLink } from 'react-router-dom'

export function Header() {
  
  const h = document.querySelector('html')
  
  const getColorScheme = () => {
    const localTheme = localStorage.getItem('theme')
    
    if (localTheme) {
      return localTheme
    } else if (
      window.matchMedia &&
      window.matchMedia('(prefer-color-schame: dark)').matches
    ) {
      return 'dark'
    } else {
      return 'light'
    }
  }

  const setTheme = newTheme => {
    h.setAttribute('data-theme', newTheme)
  }

  const selectIcon = () => {
    let theme = h.getAttribute('data-theme', 'dark') 
    if (theme === 'dark') {
      return <svg className='button__icon' xmlns="http://www.w3.org/2000/svg" width="26" height="26"><path className='button__icon-moon' fill="#FFF" fill-rule="evenodd" d="M13 0c.81 0 1.603.074 2.373.216C10.593 1.199 7 5.43 7 10.5 7 16.299 11.701 21 17.5 21c2.996 0 5.7-1.255 7.613-3.268C23.22 22.572 18.51 26 13 26 5.82 26 0 20.18 0 13S5.82 0 13 0z"/></svg>
    }else {
      return <svg className='button__icon' xmlns="http://www.w3.org/2000/svg" width="26" height="26"><path className='button__icon-sum' fill="#FFF" fill-rule="evenodd" d="M13 21a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-5.657-2.343a1 1 0 010 1.414l-2.121 2.121a1 1 0 01-1.414-1.414l2.12-2.121a1 1 0 011.415 0zm12.728 0l2.121 2.121a1 1 0 01-1.414 1.414l-2.121-2.12a1 1 0 011.414-1.415zM13 8a5 5 0 110 10 5 5 0 010-10zm12 4a1 1 0 110 2h-3a1 1 0 110-2h3zM4 12a1 1 0 110 2H1a1 1 0 110-2h3zm18.192-8.192a1 1 0 010 1.414l-2.12 2.121a1 1 0 01-1.415-1.414l2.121-2.121a1 1 0 011.414 0zm-16.97 0l2.121 2.12A1 1 0 015.93 7.344L3.808 5.222a1 1 0 011.414-1.414zM13 0a1 1 0 011 1v3a1 1 0 11-2 0V1a1 1 0 011-1z"/></svg>
    }
  } 

  const handleClick = () => {
    selectIcon()
    const actTheme = getColorScheme()
    const newTheme = actTheme == 'light' ? 'dark' : 'light'
    localStorage.setItem('theme', newTheme)
    setTheme(newTheme)
  }
  //cambio el theme si detecta un cambio de tema en el sistema
  window
    .matchMedia('(prefer-color-schame: dark)')
    .addEventListener('change', () => setTheme(getColorScheme()))
  //ejecuta el thema al inicio
  setTheme(getColorScheme())

    return (
        <header className="header">
        <nav className="header__nav">
          <ul className="nav__menu">
          <li className="menu__item">
            <button className="item__button" onClick={handleClick}>
              {selectIcon()}
            </button>
          </li>
            <li className="menu__item">
              <NavLink to="/" className="item__link">
                <svg className='link__image' fill="#000000" width="800px" height="800px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>house</title><path d="M0 16h4l12-13.696 12 13.696h4l-13.984-16h-4zM4 32h8v-9.984q0-0.832 0.576-1.408t1.44-0.608h4q0.8 0 1.408 0.608t0.576 1.408v9.984h8v-13.408l-12-13.248-12 13.248v13.408zM26.016 6.112l4 4.576v-8.672h-4v4.096z"></path></svg>
              </NavLink>
            </li>
            <li className="menu__item">
              <NavLink to="/Skills" className="item__link">
                <svg className='link__image' xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="50px" height="50px"><path d="M 19 5 C 17.355469 5 16 6.355469 16 8 L 16 11 L 3 11 C 1.347656 11 0 12.347656 0 14 L 0 22 L 9 22 C 9 20.898438 9.898438 20 11 20 L 16 20 C 17.101563 20 18 20.898438 18 22 L 32 22 C 32 20.898438 32.898438 20 34 20 L 39 20 C 40.101563 20 41 20.898438 41 22 L 50 22 L 50 14 C 50 12.347656 48.652344 11 47 11 L 34 11 L 34 8 C 34 6.355469 32.644531 5 31 5 Z M 19 7 L 31 7 C 31.5625 7 32 7.4375 32 8 L 32 11 L 18 11 L 18 8 C 18 7.4375 18.4375 7 19 7 Z M 11 22 L 11 24 L 16 24 L 16 22 Z M 34 22 L 34 24 L 39 24 L 39 22 Z M 0 24 L 0 42 C 0 43.652344 1.347656 45 3 45 L 47 45 C 48.652344 45 50 43.652344 50 42 L 50 24 L 41 24 C 41 25.101563 40.101563 26 39 26 L 34 26 C 32.898438 26 32 25.101563 32 24 L 18 24 C 18 25.101563 17.101563 26 16 26 L 11 26 C 9.898438 26 9 25.101563 9 24 Z"/></svg>
              </NavLink>
            </li>
            <li className="menu__item">
              <NavLink to="/Portfolio" className="item__link">
                <svg className='link__image' xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="96px" height="96px"><path d="M 4.9980469 10.001953 C 3.8940469 10.001953 2.9980469 10.894953 2.9980469 12.001953 L 2.9980469 46.001953 C 2.9980469 46.378634 3.1083799 46.724873 3.2890625 47.025391 C 1.9788334 47.080322 0.001953125 47.259846 0.001953125 47.494141 C 0.001953125 47.774141 3.8900469 48.001953 4.9980469 48.001953 L 4.9980469 48 L 30.998047 48 C 31.019456 48 31.041059 47.996457 31.0625 47.996094 C 31.086978 47.996802 31.107945 48.001953 31.132812 48.001953 C 31.758813 48.001953 47 47.774141 47 47.494141 C 47 47.271711 37.66546 47.108747 33.808594 47.050781 C 34.25578 46.747691 34.663379 46.391309 34.998047 46 L 47.787109 33.400391 C 47.914109 33.253391 47.998047 33.080516 47.998047 32.853516 C 47.998047 32.387516 47.614578 32 47.142578 32 L 30.998047 32 L 30.998047 41 L 27.994141 38 L 24.998047 41 L 24.998047 32 L 18.669922 32 C 17.579922 32 16.454 32.639797 15.75 33.466797 L 5.9980469 45 L 9.9980469 20 L 38.285156 20 L 37.318359 23 L 40.330078 23 L 41.929688 18.1875 C 41.965688 18.0815 41.998047 17.960516 41.998047 17.853516 C 41.998047 17.387516 41.612625 17.001953 41.140625 17.001953 L 34.498047 17.001953 C 34.222047 17.001953 33.998047 16.774141 33.998047 16.494141 C 33.998047 16.228141 34.222047 16.001953 34.498047 16.001953 L 36.998047 16.001953 C 36.998047 14.894953 36.102047 14.001953 34.998047 14.001953 L 22.998047 14.001953 C 18.998047 14.001953 18.998047 10.001953 14.998047 10.001953 L 4.9980469 10.001953 z M 14.341797 24.001953 C 13.591797 24.001953 12.780922 24.654328 12.544922 25.361328 L 7.3945312 41.853516 L 15.998047 27 L 43.519531 27 L 40.570312 31 L 43.664062 31 L 47.839844 25.347656 C 47.937844 25.214656 47.996094 25.040516 47.996094 24.853516 C 47.996094 24.387516 47.612625 24.001953 47.140625 24.001953 L 14.341797 24.001953 z"/></svg>
              </NavLink>
            </li>
            <li className="menu__item">
              <NavLink to="/Contact" className="item__link">
                <svg className='link__image' version="1.0" xmlns="http://www.w3.org/2000/svg" width="96.000000pt" height="96.000000pt" viewBox="0 0 96.000000 96.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,96.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none"><path d="M750 873 c-195 -33 -382 -140 -500 -286 -101 -124 -170 -299 -170-428 0 -74 9 -79 134 -79 110 0 118 6 131 93 3 27 13 67 21 89 l14 40 -50 52-50 53 38 59 c38 58 101 122 174 178 l37 28 56 -47 56 -48 77 18 c42 9 91 20107 24 l30 7 3 113 c2 75 -1 118 -9 127 -11 13 -46 16 -99 7z"/></g></svg>
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    )
}