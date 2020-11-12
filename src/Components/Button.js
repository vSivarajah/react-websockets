import React, {useContext} from 'react';
import styled from 'styled-components';
import {AppContext} from './AppContext.js';

/* logic inside styled components for props
const StyledButton = styled.div`
    $({ btype }) => btype == "icon-button" && `
        .icon
    `;
`;

*/

const StyledButton = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    
    margin-left: .5rem;
    .icon-button.icon {
        position: relative;
        display: inline-block;
        padding-left: 1.5rem;
        padding-right: 1.5rem;
        width: 2rem;
        height: 2rem;
        lineHeight: 2rem;
        background: #ccc;
        -webkit-mask: url(${props => props.icon}) no-repeat center;
        mask: url(${props => props.icon}) no-repeat center;
    }

    .icon-button.text {
        font-size: 1.5rem;
        color: #686f7a;
        lineHeight: 2rem;
        margin-left: .5rem;
    }

    :hover {
        cursor: pointer;
    }

    
    .grey-button,
    .white-button,
    .red-button {
    }

    .white-button {
        border-radius: .2rem;
        font-size: 1.5rem;
        color: #686f7a;
        border: 1px solid #686f7a;
        padding-left: 1.5rem;
        padding-right: 1.5rem;
        margin-left: .5rem;
    }

    .white-button:hover {
        cursor: pointer;
        color: #29303b;
        border-color: #29303b;
    }
    .red-button {
        border-radius: .2rem;
        font-size: 1.5rem;
        color: #686f7a;
        border: 1px solid #686f7a;
        padding-left: 1.5rem;
        padding-right: 1.5rem;
        margin-left: .5rem;
        color: #fff;
        background-color: #ec5252;
        border: 1px solid transparent;
    }
    .red-button:hover {
        color: #fff;
        background-color: #992337;
        border-color: transparent;
        cursor: pointer;
    }
`;
export function Button({ btype,text,icon }){
    return (
        <StyledButton btype={btype} icon={icon}>
            { btype === "icon-button" && <div className={`${btype} icon`}></div>}
            <div className={`${btype} text `}>{text}</div>
        </StyledButton>
    )
}