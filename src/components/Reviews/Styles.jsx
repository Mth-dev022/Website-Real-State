import styled from "styled-components";

export const ReviewContainer = styled.div`
    display:flex;
    width:70%;
    margin: 0 auto;
    font-family: "Montserrat", sans-serif;

    .left-side {
        width:40%;
    }
    .number {
        font-size: 115px;
        color: #FFE16A;
        margin-left: 150px;
        font-weight: 600;
    }
    .number-text {
        color: #02176D;
        font-weight: 900;
        margin-left: 150px;
        font-size: 19px;
    }
    .right-side {
        width:50%;
    }
    .title {
        padding: 20px 0px 10px 0px;
    }
    .line {
        width: 100px;
        height: 5px;
        background-color: black;
    }
    .yelp-container {
        display: flex;
    }
    .yelp-icon {
        font-size: 30px;
        color: red;
    }
    .evaluation {
        margin-top: 20px;
        border-bottom: 1px solid black;
    }
    .best-real-text {
        padding: 10px 0px 10px 0px;
    }
    .text {
        color: #4B4F58;
    }
    .name {
        padding-top: 10px;
        padding-bottom: 30px;
    }
    .star-icon {
        color: #FFE16A;
    }
`