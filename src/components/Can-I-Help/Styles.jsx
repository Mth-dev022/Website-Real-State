import styled from 'styled-components'

export const HelpContainer = styled.div`
    width: 70%;
    margin: 0 auto;
    display:flex;

    .number-side {
        width: 40%;
    }
    .number {
        font-family: "Montserrat", sans-serif;
        color: #FFE16A;
        font-size: 50px;
    }
    .number-text {
        font-family: "Montserrat", sans-serif;
        width: 50%;
        padding-top: 5px;
        font-weight: 900;
    }
    .text-side {
        width: 50%;
        font-family: "Robot Condensed", sans-serif;
    }
    .title {
        font-weight: 800;
        font-size: 45px;
        color: #222222;
    }
    .line {
        width: 100px;
        height: 3px;
        background-color: black;
        margin: 30px 0px 30px 0px;
    }
    .sub-text {
        margin: 30px 0px 30px 0px;
        color: #4B4F58;
        font-weight: 600;
    }
    .check-area {
        display:flex;
        margin-top: 50px;
    }
    .icon {
        font-size: 30px;
        color: #FFE16A;
    }
    .check-area-title {
        position: absolute;
        left: 70px;
        font-weight: 900;
    }
    .check-area-sub-title {
        position: absolute;
        top: 30px;
        left: 70px;
        color: #4B4F58;
    }
`