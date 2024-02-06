import styled  from "styled-components";

export const Container = styled.div`
    width: 80%;
    margin: 150px auto;
    background-color: #E4F7FC;
    font-family: 'Montserrat', sans-serif;

    .line {
        width: 1200px;
        height: 2px;
        margin: 0 auto;
        background-color: black;
    }
    .title {
        text-align: center;
        padding: 40px 0px 30px 0px;
        font-size: 50px;
    }
    .card-container {
        margin-top: 50px;
        display:flex;
        justify-content:center;
        flex-wrap: wrap;
    }
    .cards {
        width: 450px;
        padding: 30px 0px 30px 30px;
    }
    .icon-area {
        width: 50px;
        height: 50px;
        border: 3px solid #02176D;
        border-radius: 50%;
        display:flex;
        justify-content:center;
        align-items:center;
    }
    .icon {
        color: #02176D;
        font-size: 25px;
    }
    .card-title {
       color: #222222;
      padding: 20px 0px 20px 0px;
    }
    .card-text {
        color: #222222;
        letter-spacing: 3px;
    }
`
export const About = styled.div`
    width: 75%;
    margin: 150px auto;
    display:flex;
    background-color: #02176D;
    transform: translateY(80px);

    .left-size {
        color: #FFFFFF;
        padding: 70px 0px 0px 30px;
        width: 50%;
    }
    .about {
      padding-bottom: 10px;
    }
    .title2 {
        width: 400px;
        font-size: 45px;
    }
    .line2 {
        width: 200px;
        height: 2px;
        background-color: #FFFFFF;
        margin: 10px;
    }
    .text {
        font-weight: 900;
        font-size: 18px;
        padding-top: 20px;
    }
    .bottom-text {
        padding-top: 50px;
        font-size: 14px;
    }
    .right-size {
        transform: translateY(-100px);
    }
`