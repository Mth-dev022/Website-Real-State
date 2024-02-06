import styled from 'styled-components'

export const Main = styled.main`
    display:flex;
    height: 90vh;
    background-image: linear-gradient(to right, #07417A, #053B76, #043670, #032F6B, #022965, #011F60, #03186E);
    color: #FFFFFF;

    .left-size {
        width:50%;
        padding: 150px 0px 0px 100px;
    }
    .welcome-text {
        font-family: 'Montserrat', sans-serif;
        font-size: 25px;
    }
    .name-text {
        font-family: 'Montserrat', sans-serif;
        font-size: 15px;
        padding-bottom: 10px;
    }
    .line {
        height: 1px;
        width: 1100px;
        background-color:#ffff;
    }
    .title {
        font-family: 'Montserrat', sans-serif;
        font-weight: 800;
        padding-top: 50px;
        font-size: 57px;
    }
    .sub-title {
        font-family: 'Roboto Condensed', sans-serif;
        padding-top: 40px;
        font-size: 18px;
    }
    .person-name {
        padding: 20px 0px 30px 0px;
        font-size: 18px;
        font-weight: 900;
    }
    .right-size {
        width:50%;
        margin-left: 200px;
    }
`
export const FormContainer = styled.div`
    display:flex;
    width: 70%;
    margin: 0 auto;
    background-color: #FFE16A;
    transform: translateY(-80px);
    padding: 30px 0px 60px 30px;

    .left-size {
        width:50%;
        font-family: 'Roboto Condensed', sans-serif;
    }
    .input-container {
        padding: 15px;
    }
    .inputs {
        padding: 15px 50px;
        border:none;
        border-radius: 5px;
    }
    .submit-button {
        padding: 10px 35px;
        margin-left:80px;
        background-color: #02176D;
        border: none;
        color: #FFFFFF;
        font-family: 'Montserrat', sans-serif;
        font-weight: 800;
        cursor: pointer;
    }
    span {
        color: red;
    }
    .right-size {
        width: 30%;
        margin: 50px 0px 0px 80px;  
    }
    .title {
        font-family: 'Roboto Condensed', sans-serif;
        font-size:45px;
        font-weight: 900;
        padding-bottom: 20px;
    }
    .line {
        width: 120px;
        height: 3px;
        background-color:black;
    }
    .texts {
        padding-top: 20px;
        font-family: 'Roboto Condensed', sans-serif;
    }
`