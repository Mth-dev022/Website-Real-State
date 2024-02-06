import React from 'react'
import * as C from './Styles'
import Logo from './../../assets/Navbar-images/logo.png'

const Navbar = () => {
    return (
        <C.Nav>
            <div>
                <img style={{ width: '190px' }} src={Logo} />
            </div>
            <div>
                <ul className='nav-items'>
                    <li className='nav-item'> Home </li>
                    <li className='nav-item'> Sobre nós </li>
                    <li className='nav-item'> Areas de atuação </li>
                    <li className='nav-item'> Contato </li>
                    <li className='btn'> Consulta grátis </li>
                </ul>
            </div>
        </C.Nav>

    )
}

export default Navbar