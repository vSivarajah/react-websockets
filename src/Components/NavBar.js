import React, {useContext} from 'react';
import styled from 'styled-components';
import {AppContext} from './AppContext.js';

const StyledNavBar = styled.div`
    position: fixed;
    z-index: 2;

    width: 100vw;
    top: 0px;
    left: 0px;

    height: 6.5rem;

    box-shadow: 0 0 1px 1px rgba(20,23,28,.1),0 3px 1px 0 rgba(20,23,28,.1);
    font-size: 2rem;
    color: #505763;
    background: #fff;

    font-family: 'Hackman-Bold';
`;

export function NavBar(){
    return(
        <StyledNavBar>
            This is the NavBar
        </StyledNavBar>
    )
}