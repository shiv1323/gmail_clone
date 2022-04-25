import React from 'react'
import OptionEmail from './OptionEmail';
import Side_bar from './Side_bar';
import Sidebarright from './Sidebarright';
import styled from 'styled-components';
const Main = () => {
    return (
        <Wrapper>
            {/* <Side_bar /> */}
            {/* <OptionEmail /> */}
            {/* <Sidebarright /> */}
        </Wrapper>
    )
}

export default Main
const Wrapper = styled.div`
display:grid;
grid-template-columns:270px auto 55px;
`