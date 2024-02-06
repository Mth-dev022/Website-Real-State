import React from 'react'
import * as C from './Styles'

import Lawyer from './../../assets/Main-images/lawyer.png'
import Signature from './../../assets/Navbar-images/signature.png'

const Welcome = () => {
  return (
    <>
      <C.Main>
        <div className='left-size'>
          <h2 className='welcome-text'>Bem vindo!</h2>
          <p className='name-text'>Eu sou o Jhon, Consultor imobiliário</p>
          <div className='line'></div>
          <h1 className='title'>Tomando melhores decisões imobiliárias</h1>
          <p className='sub-title'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper.</p>
          <p className='person-name'>John Daniels</p>
          <img src={Signature} />
        </div>
        <div className='right-size'>
          <img style={{ height: '825px' }} src={Lawyer} />
        </div>
      </C.Main>

      <C.FormContainer>
        <div className='left-size'>
          <label>Nome <span>*</span> </label>
          <div className='input-container'>
            <input placeholder='Primeiro nome' className='inputs' type="text" />
            <input placeholder='Ultimo nome' style={{marginLeft:'15px'}} className='inputs' type="text" />
          </div>

          <label>E-mail <span>*</span> </label>
          <div className='input-container'>
            <input placeholder='Email' className='inputs' type="email" />
          </div>

          <label> CEP <span>*</span></label>
          <div className='input-container'>
            <input placeholder='Codigo postal' className='inputs' type="number" />
          </div>
          <button className='submit-button' type='Submit'>Enviar</button>
        </div>

        <div className='right-size'>
          <h1 className='title'>Obtenha uma consulta gratuita</h1>
          <div className='line'></div>
          <p className='texts'>Explore as possibilidades do seu próximo investimento imobiliário com a orientação especializada de um profissional comprometido. Estamos aqui para oferecer mais do que uma simples consulta - estamos prontos para entender suas necessidades e objetivos, proporcionando insights valiosos para sua jornada no mercado imobiliário.</p>
        </div>

      </C.FormContainer>
    </>

  )
}

export default Welcome