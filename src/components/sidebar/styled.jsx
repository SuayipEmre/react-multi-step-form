import styled, { css } from "styled-components";
import DesktopSideBarBg from '../../assets/bg-sidebar-desktop.svg'
import MobileSideBarBg from '../../assets/bg-sidebar-mobile.svg'


export const SideBar = styled.div`
    display:flex;
    flex-direction:column;
    gap:24px;
    background-image: url(${DesktopSideBarBg});
    background-position:center;
    background-size:cover;
    background-repeat:no-repeat;
    color: var(--white);
    padding:24px;
    width : 35%;
    border-radius:8px;

    @media screen and (max-width:600px) {
        &{
            width: 100%;
            flex-direction:row;
            height: 25% !important;
            position: absolute;
            top: 0;
            right: 0;
            left: 0;
            border-radius: 0px;
            justify-content: center;
            background-image: url(${MobileSideBarBg});
     
        }
    }
`
export const ItemNumber = styled.span`
    width:36px;
    height:36px;
    border: 1px solid var(--white);
    border-radius : 50%;
    display:flex;
    align-items:center;
    justify-content:center;
    
`

export const Item = styled.div`
    display:flex;
    align-items:center;
    gap:8px;
    ${ItemNumber} {
    ${({ isActive }) =>
      isActive &&
      css`
        background-color: var(--magnolia);
        color: var(--marine-blue);
        border-color: var(--magnolia);
      `}
  }

 
   
`



export const ItemBody = styled.div`

`;

export const SubTitle = styled.h5`
    font-size:13px;
    text-transform:uppercase;
    opacity : 0.75;

    @media screen and (max-width:600px) {
        &{
            display: none;
        }
    }
`

export const Title = styled.h2`
    text-transform:uppercase;
    font-weight : 500;
    @media screen and (max-width:600px) {
        &{
            display: none;
        }
    }

`



