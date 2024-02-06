import styled from 'styled-components'

export const Nav = styled.nav`
    width: 100%;
    display:flex;
    justify-content: space-between;
    margin: 0 auto;
    padding: 20px 100px 10px 100px;
    font-family: 'Roboto Condensed', sans-serif;
    background-image: linear-gradient(to right, #07417A, #053B76, #043670, #032F6B, #022965, #011F60, #03186E);

    .nav-items {
        display:flex;
    }
    .nav-item {
        padding: 10px 20px;
        list-style:none;
        text-decoration: none;
        color: #FFFFFF;
        font-size: 18px;
    }
    .btn {
        background-color: #FFE16A;
        padding: 10px 20px;
        font-size: 15px;
        font-weight: 600;
        color: #222222;
        list-style: none;
        border-radius: 5px;
    }
`