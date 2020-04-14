// import React from 'react';
// import styled from 'styled-components';
// import Iframe from  'react-iframe';
// const GridWrapper = styled.div`
//   display: absolute;
//    margin-top: 0.5em;
//   margin-left: 1em;
//  `;
// export const Home = (props) => (
   
//     <GridWrapper>
//          This is Dashboard

//     </GridWrapper>
// )

import React from 'react';
import styled from 'styled-components';
import Iframe from  'react-iframe';
const GridWrapper = styled.div`
  display: absolute;
   margin-top: 0.5em;
  margin-left: 1em;
 `;
export const Home = (props) => (
   
    <GridWrapper>
         <Iframe url={global.DocUrl} width="100%" height="100%" id="myId" display="initial" position="relative" frameBorder="0" />
    </GridWrapper>
)