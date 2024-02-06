import React from 'react'
import * as C from './Styles'

import { FaRegBuilding } from "react-icons/fa";
import { BsRocket } from "react-icons/bs";
import { BsSuitcaseLgFill } from "react-icons/bs";
import { FaSheetPlastic } from "react-icons/fa6";
import { PiAsteriskFill } from "react-icons/pi";

import Instructions from './../../assets/Global-images/instructions.png' 

const Consulting = () => {
  return (
    <C.Container>
        <div className='line'></div>
        <h1 className='title'>Consulte os Serviços</h1>

        <div className='card-container'>
            <div className='cards'>
                <div className='icon-area'>
                    <FaRegBuilding className='icon' />
                </div>
                <h1 className='card-title'>Due Diligence</h1>
                <p className='card-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec.</p>
            </div>

            <div className='cards'>
                <div className='icon-area'>
                    <BsRocket className='icon' />
                </div>
                <h1 className='card-title'>Portfólio Serviços</h1>
                <p className='card-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec.</p>
            </div>

            <div className='cards'>
                <div className='icon-area'>
                    <BsSuitcaseLgFill className='icon' />
                </div>
                <h1 className='card-title'>Serviços de Estudos de Mercado Imobiliário</h1>
                <p className='card-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec.</p>
            </div>

            </div>

            <div className='card-container'> 

            <div className='cards'>
                <div className='icon-area'>
                    <FaSheetPlastic className='icon' />
                </div>
                <h1 className='card-title'>Alugar Consultivo</h1>
                <p className='card-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec.</p>
            </div>

            <div className='cards'>
                <div className='icon-area'>
                    <PiAsteriskFill className='icon' />
                </div>
                <h1 className='card-title'>Serviços de avaliação imobiliária</h1>
                <p className='card-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec.</p>
            </div>

            </div>

            <C.About>
                <div className='left-size'>
                    <p className='about'>Sobre</p>
                    <h1 className='title2'>Eu entrego resultados mensuráveis</h1>
                    <div className='line2'></div>
                    <p className='text'>Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                    <p className='bottom-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                </div>

                <div className='right-size'>
                    <img src={Instructions} />
                </div>
            </C.About>
    </C.Container>
  )
}

export default Consulting