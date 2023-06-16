import { Link, NavLink } from "react-router-dom"
import {BiX, BiMenu} from 'react-icons/bi'
import { useEffect, useRef, useState } from "react"
import Overlay from "./Overlay"

const nav__links = [
    {
      path: "/",
      display: "Home",
    },
    {
      path: "/about",
      display: "About Us",
    },
    {
      path: "/services",
      display: "Services",
    },
    {
      path: "/contact",
      display: "Contact Us",
    },
]

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [scrollHeader, setScrollHeader] = useState(false);
    const [showOverlay, setShowOverlay] = useState(false);
    const menuRef = useRef(null);

    //open hamburger function
    const handleClick = () => {
        setShowMenu(true);
        setShowOverlay(true);
        document.body.style.overflow = 'hidden';
    };

    //close hamburger function
    const handleClose = () => {
        setShowMenu(false);
        setShowOverlay(false);
        document.body.style.overflow = 'auto';
    };

    //adding handclick function to menu
    useEffect(() => {
        const handleClickOutside = (event) => {
          if (menuRef.current && !menuRef.current.contains(event.target)) {
            setShowMenu(false);
            setShowOverlay(false);
            document.body.style.overflow = 'auto';
          }
        };
        if (showMenu && showOverlay) {
          document.addEventListener('mousedown', handleClickOutside);
        } else {
          document.removeEventListener('mousedown', handleClickOutside);
        }
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showMenu, showOverlay]);

    //adding onscroll header function to change bg-color
    const scrollBg = () => {
        if(window.scrollY >= 10){
          setScrollHeader(true)
        }else{
          setScrollHeader(false)
        }
      }
      useEffect(() => {
        window.addEventListener("scroll", scrollBg);
        return () => {
          window.removeEventListener("scroll", scrollBg);
        };
    }, []);

  return (
    <>
        {showOverlay && <Overlay />}
        <header className={`header ${scrollHeader ? 'scroll-header' : ''}`}>
            <nav className="h-[var(--header-height)] flex items-center justify-between mycontainer md:h-20 ">
                <Link to="/" className="text-[color:var(--black-clr)] font-[number:var(--bold-fw)] ">Saul~Firm</Link>
                <div className={`nav-menu ${showMenu ? 'activeMenu' : ''}`} ref={menuRef}>
                    <ul className="flex flex-col items-center gap-y-8 lg:flex-row gap-x-14 " onClick={handleClose}>
                        { nav__links.map(( item, index ) => (
                            <li className="nav-item" key={index}>
                                <NavLink to={item.path} className={(navClass) => navClass.isActive ? 'active-link' : 'nav-link'}>{item.display}</NavLink>
                            </li>
                        ))}
                    </ul>
                    <div className="absolute text-2xl cursor-pointer right-6 top-4 lg:hidden " onClick={handleClose}><BiX /></div>
                </div>
                <div className="inline-flex text-xl cursor-pointer text-[color:var(--black-clr)] lg:hidden " onClick={handleClick}><BiMenu /></div>
                <Link to="/" className="button button-cta hidden lg:block">Schedule a call</Link>
            </nav>
        </header>
    </>
  )
}

export default Header