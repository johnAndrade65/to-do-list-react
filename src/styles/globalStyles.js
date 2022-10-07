import { createGlobalStyle } from "styled-components";


export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Alumni+Sans+Collegiate+One&family=Roboto:wght@300;900&display=swap');

    *{
        margin: 0px;
        padding: 0px;
        outline: 0px;
        box-sizing: border-box;

    }

    *:focus{
        outline: 0px;
    }

    html, body, #root{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
    }

    body{
        background: #363636;
        -webkit-font-smoothing: antialiase;
    }

    body, input, button{
        font: 14px 'roboto',sans-serif;
        color: #ffffff;
    }

    input{
        height: 50px;
        width: 100%;
        border-radius: 8px;
        padding: 0 16;
        background: #fff;
        border: 2px solid #191919;
        color: #2c2c2c;
    }

    input::placeholder{
        color: #191919;
    }

    button{
        cursor: pointer;
        height:50px;
        width:150px;
        border-radius: 8px;
        font-weight: 500;
        color: #fff;
        border: 0px;
        background: #000000;
    }
`;