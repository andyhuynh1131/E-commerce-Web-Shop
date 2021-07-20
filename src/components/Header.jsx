import React, { useEffect, useRef } from 'react'

import { Link, useLocation } from 'react-router-dom'

import logo from '../assets/images/Logo-2.png'


const mainNav = [
    {
        display: "Trang Chủ",
        path: "/"
    },
    {
        display: "Sản Phẩm",
        path: "/catalog"
    },
    {
        display: "Phụ Kiện",
        path: "/accessories"
    },
    {
        display: "Liên Hệ",
        path: "/contact"
    }
]
const Header = () => {
    const { pathname } = useLocation()

    const ActiveNav = mainNav.findIndex(item => item.path === pathname)

    const headerRef = useRef(null)

    useEffect(() => {
        window.addEventListener("scroll", () => {


            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                headerRef.current.classList.add('shrink')
            } else {
                headerRef.current.classList.remove('shrink')
            }
        })


        return () => {
            window.removeEventListener('scroll')
        }
    }, [])

    const menuRef = useRef(null)

    const menutoggle = () => menuRef.current.classList.toggle('active')

    return (
        <div className="header" ref={headerRef}>
            <div className="container">
                <div className="header__logo">
                    <Link>
                        <img src={logo} alt="" />
                    </Link>
                </div>
                <div className="header__menu">
                    <div className="header__menu__mobile-toggle" onClick={menutoggle}>
                        <i class='bx bx-menu-alt-left' ></i>
                    </div>
                    <div className="header__menu__left" ref={menuRef}>
                        <div className="header__menu__left__close" onClick={menutoggle}>
                            <i class='bx bx-chevron-left' ></i>
                        </div>
                        {
                            mainNav.map((item, index) => (
                                <div key={index} className={`header__menu__item
                                header__menu__left__item ${index === ActiveNav ? 'active' : ''}`}
                                    onClick={menutoggle}
                                >
                                    <Link
                                        to={item.path}
                                    >
                                        <span>{item.display}</span>
                                    </Link>
                                </div>
                            ))

                        }
                    </div>


                    <div className="header__menu__right">
                        <div className="header__menu__item header__menu__right__item">
                            <i class='bx bx-search' ></i>
                        </div>
                        <div className="header__menu__item header__menu__right__item">

                            <Link to="/cart">
                                <i class='bx bxl-shopify'></i>
                            </Link>
                        </div>
                        <div className="header__menu__item header__menu__right__item">
                            <i class='bx bx-user' ></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
