import React from 'react'
import * as C from './Styles'

import { FaYelp } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";

const Review = () => {
    return (
        <C.ReviewContainer>
            <div className='left-side'>
                <h1 className='number'>4.9</h1>
                <p className='number-text'>Out of 5</p>
            </div>

            <div className='right-side'>

                <div className='yelp-container'>
                    <FaYelp className='yelp-icon' />
                    <p>Yelp Reviews</p>
                </div>

                <h1 className='title'>Out of 5what My Clients Say</h1>
                <div className='line'></div>

                <div className='evaluation'>
                    4.9 <IoIosStar className='star-icon' /><IoIosStar className='star-icon' /><IoIosStar className='star-icon' /><IoIosStar className='star-icon' /><IoIosStar className='star-icon' />
                    <h2 className='best-real-text'>Melhor consultor imobiliário de todos os tempos</h2>
                    <p className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec mattis, pulvinar dapibus leo dolor sit amet.</p>
                    <h3 className='name'>Gianna Irvin</h3>
                </div>

                <div className='evaluation'>
                    4.8 <IoIosStar className='star-icon' /><IoIosStar className='star-icon' /><IoIosStar className='star-icon' /><IoIosStar className='star-icon' /><IoIosStar className='star-icon' />
                    <h2 className='best-real-text'>Trabalhar com Hank foi nossa decisão mais inteligente</h2>
                    <p className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec mattis, pulvinar dapibus leo dolor sit amet.</p>
                    <h3 className='name'>John Oliver</h3>
                </div>

                <div className='evaluation'>
                    5.0 <IoIosStar className='star-icon' /><IoIosStar className='star-icon' /><IoIosStar className='star-icon' /><IoIosStar className='star-icon' /><IoIosStar className='star-icon' />
                    <h2 className='best-real-text'>Trabalhar com um consultor imobiliário acabou por ser muito rentável para nós</h2>
                    <p className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec mattis, pulvinar dapibus leo dolor sit amet.</p>
                    <h3 className='name'>Becky George</h3>
                </div>

            </div>
        </C.ReviewContainer>
    )
}

export default Review