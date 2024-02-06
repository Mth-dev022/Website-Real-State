import React from 'react'
import * as C from './Styles'

import Logo from './../../assets/Navbar-images/logo.png'

import { CiLinkedin } from "react-icons/ci";
import { FaYelp } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";


const Footer = () => {
    return (
        <>
        <C.FooterContainer>
            <div>
                <img src={Logo} />
            </div>
            <div>
                <ul className='list'>
                    <li className='list-items'>Contato</li>
                    <li className='list-items'>929-242-6868contact@info.com</li>
                    <li className='list-items'>Endereço</li>
                    <li className='list-items'>123 Fifth Avenue, New York,NY 10160</li>
                </ul>
            </div>
            <div className='icon-container'>
                <CiLinkedin className='icons' />
                <FaYelp className='icons' />
                <CiFacebook className='icons' />
            </div>
        </C.FooterContainer>
        <C.Footer className='footer'>
            Copyright © 2024 Real Estate Consultant | Powered by Matheus Souza
        </C.Footer>
        </>
    )
}

export default Footer