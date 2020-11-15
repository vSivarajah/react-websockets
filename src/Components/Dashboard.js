import React, {useContext} from 'react';
import styled from 'styled-components';
import {AppContext} from './AppContext.js';
import ReactJson from 'react-json-view';

const StyledDashboard = styled.div`
    position: relative;
    margin-top: 6.5rem;
`;

export function Dashboard() {
    const appState = useContext(AppContext)
    const { rs } = useContext(AppContext)


    return (
        <StyledDashboard>
            <ReactJson src={appState} collapsed={true}/>
            Ready State: { rs }

        </StyledDashboard>
    )
}