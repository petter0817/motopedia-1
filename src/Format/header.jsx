import React, { useState } from 'react';
import { Offcanvas } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Brand } from '../Redux/Action/Brand';

const Header = () => {
    const { MotoData } = useSelector((state) => state)
    const BrandState = useSelector((state) => state.Brand)
    const motonav = MotoData.MOTONAV
    const [show, setShow] = useState(false)

    const dispatch = useDispatch()

    return (
        <header
            className='vw-100 border-bottom d-flex align-items-center justify-content-between'
        >
            <NavLink to="/" className='display-3 p-0 m-0 text-decoration-none text-dark'>MotoPedia</NavLink>
            <svg
                onClick={() => { setShow(!show) }}
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="bi bi-justify h-100 p-1"
                viewBox="0 0 16 16"
            >
                <path fillRule="evenodd" d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
            </svg>
            
            <Offcanvas show={show} onHide={() => { setShow(false) }}>
                <Offcanvas.Header closeButton className='border-bottom'>
                    <NavLink
                        to="/"
                        onClick={() => { setShow(false) }}
                        className='fs-1 m-0 text-decoration-none text-dark'
                    >
                        MotoPedia
                    </NavLink>
                </Offcanvas.Header>
                <div className='vw-100'>
                    {motonav ? motonav.map((item, index) => {
                        return (
                            <NavLink
                                className="text-decoration-none"
                                key={index}
                                to="/brand"
                                onClick={
                                    () => {
                                        setShow(false)
                                        dispatch(Brand(item.id))
                                    }
                                }
                            >
                                <p
                                    className={`nav-brand text-dark m-0 display-5
                                    ${BrandState === item.id ? "click-on" : null}`}
                                >{item.id}</p>
                            </NavLink>
                        )
                    }) : null}
                </div>
            </Offcanvas>
        </header>
    );
}

export default Header;
