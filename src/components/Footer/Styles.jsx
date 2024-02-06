import styled from "styled-components";

export const FooterContainer = styled.div`
    width:100%;
    background-color: #02176D;
    display:flex;
    justify-content:space-around;
    padding: 100px 150px 150px 150px;
    margin-top: 150px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;

    .list {
        list-style: none;
        color: #FFFFFF;
    }
    .list-items {
        padding: 10px;
    }
    .icon-container {
        display:flex;
        flex-direction:column;
        gap: 30px;
    }
    .icons {
        font-size: 50px;
        color: #FFFFFF;
        cursor: pointer;
    }
    `
    export const Footer = styled.footer` 
        padding: 30px;
        text-align: center;
        font-family: 'Montserrat', sans-serif;
        font-weight: 600;
    `
