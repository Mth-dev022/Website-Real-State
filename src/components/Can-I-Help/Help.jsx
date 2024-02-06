import React from 'react'
import { HelpContainer } from './Styles'
import { FaCheckCircle } from "react-icons/fa";


const Help = () => {
    return (
        <HelpContainer>
            <div className='number-side'>
                <h1 className='number'>750+</h1>
                <p className='number-text'>Propiedades revisadas para meus clientes</p>
            </div>
            <div className='text-side'>
                <h1 className='title'> Como posso ajudar ? </h1>
                <div className='line'></div>
                <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h2>
                <p className='sub-text'>Nisi iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.</p>

                <div style={{position:'relative'}}>
                    <div className='check-area'>
                        <FaCheckCircle className='icon' />
                        <p className='check-area-title'>Executando análises de propriedade única</p>
                    </div>
                    <p className='check-area-sub-title'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                </div>

                <div style={{position:'relative'}}>
                    <div className='check-area'>
                        <FaCheckCircle className='icon' />
                        <p className='check-area-title'>Avaliação de portfólios grandes e diversificados</p>
                    </div>
                    <p className='check-area-sub-title'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                </div>

            </div>
        </HelpContainer>
    )
}

export default Help