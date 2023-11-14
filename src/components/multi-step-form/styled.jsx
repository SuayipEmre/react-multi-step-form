import styled from "styled-components";

export const multiStepForm = styled.div`
    display:flex;
    gap : 12px;
    padding : 12px;
    background-color:var(--white);
    border-radius:16px;
    min-height : 60vh;
    min-width : 90vw;
    box-shadow : 0 5px 10px 10px rgba(0,0,0, 0.05);
   
    @media screen and (max-width:600px) {
        &{
            flex-direction: column;
            background-color:transparent;
            height: 100vh;
            width: 100vw;
        }
    }

`;