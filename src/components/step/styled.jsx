import styled from "styled-components";

export const Step= styled.form`
    flex:1;
    display:flex;
    flex-direction : column;
    gap:24px;
    padding:24px;


    @media screen and (max-width:600px) {
     &{
        position: absolute;
        top: 50;
        left: 0;
        right: 0;
        z-index: 10;
        border-radius: 10px;
        background-color:var(--white);
        justify-content: space-between;
        margin: 160px 10px;
     }
    }

`

export const StepHeader = styled.div``

export const Title = styled.h2`
    font-size:36px;
    font-weight : 700px;
`


export const SubTitle = styled.h3`
    color:var(--cool-gray);
`


export const Body = styled.div`
    flex:1;
`

export const StepFooter = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;

    @media screen and (max-width:600px) {
        &{
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            padding: 10px;
            background-color: var(--white);
        }
    }
    
`

export const GoBackButton = styled.button`
    color:var(--cool-gray);
    &:hover{
        color:inherit;
        
    }
`

export const GoNextButton = styled.button`
    margin-left:auto;
    color:var(--white);
    background-color:var(--marine-blue);
    padding: 12px 24px;
    border-radius: 8px;
    

`


export const ConfirmButton = styled.button`
    margin-left:auto;
    color:var(--white);
    background-color:var(--purplish-blue);
    padding: 12px 24px;
    border-radius: 8px;
    

`







