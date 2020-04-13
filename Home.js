import React from 'react';
import styled from 'styled-components';
import Iframe from  'react-iframe';
const GridWrapper = styled.div`
  display: absolute;
 // grid-gap: 10px;
  margin-top: 1em;
  margin-left: 1em;
  margin-right: 6em;
 // grid-template-columns: repeat(12, 1fr);
 // grid-auto-rows: minmax(25px, auto);
`;
export const Home = (props) => (
    <GridWrapper>
        <Iframe url={global.DocUrl} width ="900%" height="450px" id="myId" display="initial" position ="relative" />
    </GridWrapper>
)