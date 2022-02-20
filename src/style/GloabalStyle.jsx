import React from 'react';
import { createGlobalStyle } from 'styled-components';

const StyledGlobalStyle = createGlobalStyle`

*{
    margin:0;
    padding: 0; 
    box-sizing:border-box;
    font-family: Montserrat;
    font-weight: 400;
    line-height: 142.6%;
} 

body {
    max-width: 1200px;
    margin: auto;

}
`;

function GloabalStyle() {
	return <StyledGlobalStyle />;
}

export default GloabalStyle;
